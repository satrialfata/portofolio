"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export default function AnimatedCounter({ value, duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * numericValue);
            
            setCount(current);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(numericValue);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericValue, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  );
}
