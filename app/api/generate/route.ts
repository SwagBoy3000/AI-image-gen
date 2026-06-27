import { NextResponse } from "next/server";

const ratioMap:Record<string, {width: number, height:number}>={
    "1:1":{width:1024, height:1024},
    "16:9":{width:1024, height:576},
    "9:16":{width:576, height:1024}
}

export async function POST(req:Request) {
    try {
        const {prompt, model, ratio, imageCount} = await req.json()

        if (!prompt) {
            return NextResponse.json(
                {error : "Prompt is required"},
                {status: 400}
            )            
        }

        const MODEL = model || "runwayml/stable-diffusion-v1-5"
        const count = Math.min(Number(imageCount) || 1, 4)
        const selectedRatio = ratioMap[ratio] || ratioMap["1:1"]

        const images:string[] = []
        const size = ratioMap[ratio] || ratioMap["1:1"]

        for (let i = 0; i < count; i++) {
            const response = await fetch(
                `https://router.huggingface.co/hf-interference/models/${MODEL}`,
                {
                    method: "POST",
                    headers:{
                        Authorization: `Bearer ${process.env.API_KEY}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        inputs: prompt,
                        parameters: {
                            width: size.width,
                            height: size.height,
                            seed: Math.floor(Math.random()* 100000)
                        },
                        options: {
                            wait_for_model: true,
                        }
                    })
                }
            )
            if (!response.ok) {
                const err = await response.text()
                return NextResponse.json({error: err}, {status: response.status})
            }

            const buffer = await response.arrayBuffer();
            const base64 = Buffer.from(buffer).toString("base64")

            images.push(`data:image/png;base64, ${base64}`)
        }
        return NextResponse.json({images})
    } catch (error) {
        
    }
}