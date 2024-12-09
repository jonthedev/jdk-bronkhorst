import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/layout/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen">
      <Header />
      {/* Video Background Layer */}
      <div className="fixed inset-0 z-0">
        {/* We'll add the video component here */}
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
