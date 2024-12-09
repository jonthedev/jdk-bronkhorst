import { Hero } from "@/components/home/hero";
import { HERO_SEGMENTS } from "@/lib/constants/hero";

export default function Home() {
  return (
    <main>
      <Hero segments={HERO_SEGMENTS} />
    </main>
  );
}
