import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { type HeroSegment } from "@/lib/constants/hero"
import { ArrowRight } from "lucide-react"

interface HeroContentProps {
  section: HeroSegment
  progress: number
}

export function HeroContent({ section, progress }: HeroContentProps) {
  return (
    <div className="relative z-10 flex flex-col justify-between h-full container mx-auto px-4">
      {/* Top Section - Hero Title */}
      <div className="pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-bold text-white"
        >
          We are the
          <br />
          low-flow specialist
        </motion.h1>
      </div>

      {/* Middle Section - Progress Bar */}
      <div className="fixed left-0 right-0 w-full" style={{ top: "50%" }}>
        <div className="absolute -translate-y-1/2 w-full h-[2px] bg-white/20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>

      {/* Bottom Section - Market Info */}
      <div className="pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center mb-8"
        >
          <div
            className="h-4 w-4 rounded-full mr-8"
            style={{ backgroundColor: section.market.color }}
          />
          <span className="text-white text-4xl">{section.market.name}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg max-w-[35%] mb-10"
        >
          {section.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            asChild
            variant="ghost"
            className="group text-white border border-white/20 hover:border-white/40 bg-black/20 backdrop-blur-sm hover:bg-black/40 p-8 min-w-[400px]"
          >
            <a href={section.ctaLink} className="flex items-center gap-8">
              <span>{section.ctaText}</span>
              <ArrowRight
                style={{ width: "30px", height: "30px" }}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
