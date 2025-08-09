"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/hero-architecture.jpg",
  "/images/architectural-drawing.jpg",
  "/images/construction-site.jpg",
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image src={src} alt="Architecture Project" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-24 text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xs uppercase tracking-widest mb-2"
        >
          From concept to creation – Architecture | Interiors | Construction | Furniture
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-6xl font-light mb-6"
        >
          Designing Spaces, Building Dreams
        </motion.h1>

        {/* <motion.a href="#" whileHover={{ x: 5 }} className="text-sm underline underline-offset-4">
          View Project →
        </motion.a> */}
      </div>

      <div className="absolute bottom-8 left-8 text-white text-sm font-light z-10">
        Beyond Architecture. Creating Experiences.
      </div>
    </section>
  );
}


export { HeroSlider }