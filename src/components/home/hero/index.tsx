import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { VideoPlayer } from "./video-player"
import { HeroContent } from "./content"
import { Navigation } from "./navigation"
import { HERO_SEGMENTS } from "@/lib/constants/hero"

interface HeroProps {
  className?: string
  segments: typeof HERO_SEGMENTS
}

export function Hero({ className, segments }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActiveIndex(current => (current + 1) % segments.length)
          return 0
        }
        return prev + 0.1
      })
    }, 10)

    return () => clearInterval(interval)
  }, [segments.length])

  const handleNext = () => {
    setProgress(0)
    setActiveIndex(prev => (prev + 1) % segments.length)
  }

  const handlePrev = () => {
    setProgress(0)
    setActiveIndex(prev => (prev - 1 + segments.length) % segments.length)
  }

  const currentSegment = segments[activeIndex]

  return (
    <section
      className={cn("relative h-screen w-full overflow-hidden", className)}
    >
      <div className="transition-opacity duration-1000">
        <VideoPlayer url={currentSegment.videoSrc} />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <HeroContent section={currentSegment} progress={progress} />
      <div className="container mx-auto px-4">
        <div className="absolute bottom-32 right-0">
          <Navigation
            onNext={handleNext}
            onPrev={handlePrev}
            currentIndex={activeIndex}
            totalSlides={HERO_SEGMENTS.length}
          />
        </div>
      </div>
    </section>
  )
}
