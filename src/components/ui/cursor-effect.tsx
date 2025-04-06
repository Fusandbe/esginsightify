
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/ThemeProvider";

export function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [currentButtonEl, setCurrentButtonEl] = useState<HTMLElement | null>(null);
  const { theme } = useTheme();

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

      // Check if hovering over a button specifically for the glow effect
      const button = target.tagName === 'BUTTON' ? target : target.closest('button');
      if (button) {
        setIsHoveringButton(true);
        setCurrentButtonEl(button as HTMLElement);
        // Add glow effect to button
        button.classList.add('hover:shadow-glow', 'scale-105', 'transition-transform');
      } else if (isHoveringButton && currentButtonEl) {
        setIsHoveringButton(false);
        // Remove glow effect when leaving the button
        currentButtonEl.classList.remove('hover:shadow-glow', 'scale-105', 'transition-transform');
        setCurrentButtonEl(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      // Reset button effects when mouse leaves the window
      if (currentButtonEl) {
        currentButtonEl.classList.remove('hover:shadow-glow', 'scale-105', 'transition-transform');
        setCurrentButtonEl(null);
      }
      setIsHoveringButton(false);
    };

    // Register events
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHoveringButton, currentButtonEl]);

  if (typeof window === 'undefined') return null;

  // Determine cursor color based on theme
  const cursorColor = theme === "dark" ? "border-white" : "border-gray-800";
  const dotColor = theme === "dark" ? "bg-white" : "bg-gray-800";

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
          "fixed -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-transparent mix-blend-difference",
          cursorColor,
          isPointer ? "w-5 h-5 duration-200" : "w-8 h-8 duration-300",
        )}
      />
      
      {/* Secondary dot */}
      <div 
        className={cn(
          "fixed -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full mix-blend-difference",
          dotColor
        )}
      />
    </div>
  );
}
