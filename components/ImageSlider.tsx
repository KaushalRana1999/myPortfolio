"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ImageSlider({
  images,
  alt,
  interval = 2500,
  className = "",
}: {
  images: string[];
  alt: string;
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) {
    return (
      <div className={`flex h-full w-full items-center justify-center ${className}`}>
        <span className="font-mono text-[11px] text-ink-faint">[ no_preview.png ]</span>
      </div>
    );
  }

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <AnimatePresence mode="sync">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {images.map((img, i) => (
            <span
              key={img}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-4 bg-accent" : "w-1.5 bg-accent/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}