"use client"
import Controls from "@/components/Controls";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import PromptInput from "@/components/PromptInput";
import { useState } from "react";

export default function Home() {

  const [prompt, setPrompt] = useState("")
  const [model,setModel] = useState("")
  const [count, setCount] = useState("1")
  const [ratio, setRatio] = useState("1:1")
  const [loading, setLoading] = useState(false)
  const [loadingSlots, setLoadingSlots] = useState(0)

  const [images, setImages] = useState<string[]>([])

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    if(!prompt) return alert("enter a prompt")
    setLoading(true)
    setImages([])
    setLoadingSlots(Number(count))

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({prompt, model, ratio, imageCount: count}),
    })

    const data = await res.json()
    setImages(data.images || [])
    setLoading(false)
    setLoadingSlots(0)
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full bg-linear-to-r from-[#e9e9ff] to-[#c8c7ff] p-4">
        <div className="bg-white w-full max-w-5xl p-6 md:p-8 rounded-xl shadow-xl">
          <Header />

          <form className="space-y-6" onSubmit={handleSubmit}>
            <PromptInput prompt={prompt} setPrompt={setPrompt}/>
            <Controls 
              setModel = {setModel}
              setCount = {setCount}
              setRatio = {setRatio}
              loading = {loading}
            />
          </form>

          <Gallery 
            images = {images}
            loading = {loading}
            loadingSlots = {loadingSlots}
          />
        </div>
      </div>
    </>
  );
}
