'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src?: string;
  alt?: string;
  className?: string;
  aspectRatio?: string;
  speed?: number;
  children?: React.ReactNode;
}

export default function ParallaxImage({
  src,
  alt = '',
  className = '',
  aspectRatio = 'aspect-[4/5]',
  speed = 0.2,
  children,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate the y movement based on speed. 
  // speed = 0.2 means the image moves 20% slower than the scroll, creating a parallax effect.
  // We apply negative offset at start, positive at end to move image within container
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  
  // Optional scale effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y, scale: 1.15 }} // Make image larger than container to allow movement without seeing edges
        />
      ) : (
        <motion.div
          className="absolute inset-0 w-full h-full bg-[#0B1F3A]/5 flex items-center justify-center"
          style={{ y, scale: 1.15 }}
        >
          {/* Default placeholder if no src provided */}
          <div className="w-full h-full bg-[#E5E7EB]" />
        </motion.div>
      )}
      
      {/* Optional overlay content */}
      {children && (
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
          {children}
        </div>
      )}
    </div>
  );
}
