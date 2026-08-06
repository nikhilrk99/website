"use client";

import { useEffect, useRef } from "react";

export default function TestimonialCarousel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (pausedRef.current) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - 1) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      // Advance to the next card that isn't already (fully or partially) in view.
      const cards = Array.from(container.children) as HTMLElement[];
      const next = cards.find((card) => card.offsetLeft > container.scrollLeft + 1);
      container.scrollTo({
        left: next ? next.offsetLeft : maxScrollLeft,
        behavior: "smooth",
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // While the user is manually interacting (hover/touch pauses autoplay),
  // loop back to the start once they scroll to the end themselves.
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let settleTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      if (!pausedRef.current) return;
      clearTimeout(settleTimeout);
      settleTimeout = setTimeout(() => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScrollLeft - 1) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 200);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(settleTimeout);
    };
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div
      ref={scrollRef}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
      className={`flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children}
    </div>
  );
}
