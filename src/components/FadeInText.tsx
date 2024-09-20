"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FadeInText = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power2.inOut" }
    );
  }, []);

  // Hover animation
  useEffect(() => {
    const element = textRef.current;

    if (element) {
      const handleMouseEnter = () => {
        gsap.to(element, {
          scale: 1.5,
          color: "#f97316", // Orange text on hover
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          scale: 1,
          color: "#000000", // Reset to black text on leave
          duration: 0.3,
          ease: "power2.out",
        });
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      // Clean up event listeners on unmount
      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 ref={textRef} className="text-4xl font-bold">
        Hello, GSAP with Next.js!
      </h1>
    </div>
  );
};

export default FadeInText;
