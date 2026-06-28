# 🎨 AI Image Generator

    Generate stunning AI-powered images from text prompts using state-of-the-art models. Choose your model, aspect ratio, and watch your imagination come to life.

# Highlights

    Multiple AI Models — Choose from FLUX, SDXL, Stable Diffusion, and OpenJourney

    Real-time Generation — Watch your images generate in seconds

    Flexible Controls — Adjust image count (1-4) and aspect ratio (1:1, 16:9, 9:16)

    Gallery Display — View all generated images in a clean, responsive grid

    One-click Download — Save your favorite creations locally

# ℹ️ Overview

AI Image Generator is a full-stack web application that leverages the Hugging Face Inference API to generate AI images from text prompts. Built with Next.js 15 and TypeScript, it provides a seamless interface for creating unique visuals using various open-source models.

The application demonstrates modern React patterns, serverless API routes, and integration with external AI services. Whether you're an artist seeking inspiration, a developer exploring AI capabilities, or just curious about image generation, this tool makes AI art accessible to everyone.
✍️ Author

This project was built by SwagBoy3000 to showcase expertise in Next.js, TypeScript, and AI API integration.
Quick Start
bash

# Clone the repository
    git clone https://github.com/SwagBoy3000/AI-image-gen.git
    cd AI-image-gen

# Install dependencies
    npm install

# Set up environment variables
    Create a .env.local file with your Hugging Face API key:
    API_KEY=your_huggingface_api_key

# Run the development server
    npm run dev

Open http://localhost:3000 to start generating images!
# Features
🤖 Multiple AI Models

    FLUX.1-dev — High-quality, detailed generations

    FLUX.1-schnell — Fast, optimized generation

    SDXL — Stable Diffusion XL for high-resolution outputs

    SD v1.5 — Classic Stable Diffusion

    OpenJourney — Artistic, stylized generations

🎛️ Generation Controls

    Text Prompt — Describe your vision in natural language

    Image Count — Generate 1 to 4 images at once

    Aspect Ratio — Choose from Square (1:1), Landscape (16:9), or Portrait (9:16)

🖼️ Gallery Experience

    Loading States — Visual feedback while images generate

    Responsive Grid — Clean display on any screen size

    Download Support — Save images with a single click

⚡ Performance

    Serverless API — Next.js API routes for secure model calls

    Streaming Support — Real-time feedback during generation

    Error Handling — Graceful failures with user-friendly messages

# ⬇️ Installation
Requirements

    Node.js 18.0 or higher

    npm, yarn, pnpm, or bun

    Hugging Face API key (free tier available)

Environment Setup
bash

# Create a .env.local file in the root directory
API_KEY=your_huggingface_api_key

Development
bash

# Install dependencies
    npm install

# Start development server
    npm run dev

# Production Build
    bash

# Build the application
    npm run build

# Start production server
    npm start

📁 Project Structure
    text
    
    AI-image-gen/
    ├── app/
    │   ├── api/
    │   │   └── generate/
    │   │       └── route.ts      # Hugging Face API integration
    │   ├── layout.tsx            # Root layout with metadata
    │   ├── page.tsx              # Main application page
    │   └── globals.css           # Global styles
    ├── components/
    │   ├── Controls.tsx          # Model, count, and ratio controls
    │   ├── Gallery.tsx           # Image display grid
    │   ├── Header.tsx            # App header
    │   └── PromptInput.tsx       # Text prompt input
    ├── lib/
    │   └── prompts.ts            # Default prompt suggestions
    ├── public/                   # Static assets
    └── package.json

🛠️ Tech Stack
Technology	Purpose
Next.js 15	Full-stack React framework
TypeScript	Type-safe development
Tailwind CSS	Styling
Hugging Face Inference API	AI image generation
Lucide React	Icons
🧠 How It Works

    User submits a prompt — Describe the image you want to generate

    API route processes the request — Securely calls the Hugging Face Inference API

    Image generation — The selected model generates the image(s)

    Base64 encoding — Images are returned as base64 strings for instant display

    Gallery rendering — Generated images appear in a responsive grid

API Integration

The application uses Hugging Face's Inference API with the following models:

    runwayml/stable-diffusion-v1-5 (default)

    black-forest-labs/FLUX.1-dev

    black-forest-labs/FLUX.1-schnell

    stabilityai/stable-diffusion-xl-base-1.0

    prompthero/openjourney-v4

Each request includes:

    Text prompt

    Selected model

    Aspect ratio (mapped to width/height)

    Random seed for variation

    Wait_for_model flag for cold starts

🚀 Deployment

The easiest way to deploy this application is using Vercel:
bash

# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

Make sure to add your API_KEY environment variable in the Vercel dashboard.
📝 License

This project is open source and available under the MIT License.

Made with ❤️ by SwagBoy3000
