import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface NavigationProps {
  onNext: () => void
  onPrev: () => void
  currentIndex: number
  totalSlides: number
}

export function Navigation({ onNext, onPrev }: NavigationProps) {
  return (
    <div className="relative flex items-center gap-8 mr-32">
      <Button
        variant="ghost"
        size="icon"
        onClick={onPrev}
        className="text-white hover:bg-white/10 h-16 w-16"
      >
        <ArrowLeft style={{ width: "30px", height: "30px" }} />
      </Button>

      <div className="relative w-[2px] bg-white/20">
        <div className="h-[24px]" />
        <div className="absolute top-full h-[50vh] w-full bg-white/20" />
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        className="text-white [&:hover]:text-white hover:bg-white/10 h-16 w-16"
      >
        <ArrowRight style={{ width: "30px", height: "30px" }} />
      </Button>
    </div>
  )
}
