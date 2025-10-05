"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
}

export function ScrollAnimation({ children, className, delay = 0, ...props }: ScrollAnimationProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setInView(true);
          }, delay);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
