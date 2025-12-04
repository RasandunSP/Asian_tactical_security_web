"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const heroImages = [
  "/Hero_caro/485001245_1752385895521673_1863465940500072894_n.jpg",
  "/Hero_caro/484553554_1755263031900626_6788712176193996626_n.jpg",
  "/Hero_caro/485094240_1755263041900625_736837625416320923_n.jpg",
  "/Hero_caro/487316894_1765072690919660_301362420649754947_n.jpg",
  "/Hero_caro/487799177_1765822077511388_9130478355186706248_n.jpg",
  "/Hero_caro/488377084_1771476383612624_2769082243582401381_n.jpg",
  "/Hero_caro/467679400_18206156431293289_6686936944060334186_n.jpg",
  "/Hero_caro/466119558_18204903907293289_3948555336623019410_n.jpg",
  "/Hero_caro/466431165_18204903871293289_1802833308900153075_n.jpg",
  "/Hero_caro/466390623_18204903898293289_5813431784318643450_n.jpg",
  "/Hero_caro/466420803_18204903862293289_4548952114070766382_n.jpg",
  "/Hero_caro/465876117_18204903925293289_7884932099446602680_n.jpg",
  "/Hero_caro/466420570_18205018195293289_769170845094147068_n.jpg",
  "/Hero_caro/466514810_18205018228293289_3041223144192363336_n.jpg",
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
            alt={`TST Training ${index + 1}`}
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

