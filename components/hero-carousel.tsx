"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const heroImages = [
  "/Hero_caro/20231209_BLP508.jpg",
  "/Hero_caro/466514810_18205018228293289_3041223144192363336_n.jpg",
  "/Hero_caro/6f8066266e5cd7e79134b0347368ea550d252540.jpg",
  "/Hero_caro/800x450.jpg",
  "/Hero_caro/images (1).jpeg",
  "/Hero_caro/images (2).jpeg",
  "/Hero_caro/images (3).jpeg",
  "/Hero_caro/images.jpeg",
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Asian Tactical Security Training - Elite tactical training session ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        </div>
      ))}
    </div>
  )
}

