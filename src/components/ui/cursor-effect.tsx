
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      // Set isPointer to true or false based on whether element is clickable
      setIsPointer(isClickable);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Register events
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <div
      className={cn(
        "fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300",
        !isVisible && "opacity-0"
      )}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)` 
      }}
    >
      {/* Main cursor */}
      <div
        className={cn(
          "fixed -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-transparent mix-blend-difference",
          isPointer ? "w-5 h-5 duration-200" : "w-8 h-8 duration-300",
        )}
      />
      
      {/* Secondary dot */}
      <div 
        className="fixed -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white mix-blend-difference"
      />
    </div>
  );
}
