import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/9169da8f-8aa6-49eb-9b56-ee52f048a713/files/c6493e07-30e6-4c91-82d8-d32638440421.jpg"
          alt="Pink landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6" style={{textShadow: '0 0 40px rgba(255,105,180,0.8)'}}>
          РОЗОВЫЙ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90" style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
          Школьный проект о самом прекрасном цвете в мире
        </p>
      </div>
    </div>
  );
}