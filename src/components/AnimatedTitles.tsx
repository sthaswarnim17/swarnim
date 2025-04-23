
import React, { useEffect, useState } from "react";

const TITLES = [
  "Graphic Designer",
  "Creative Thinker",
  "Visual Storyteller"
];

export default function AnimatedTitles() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const outTimer = setTimeout(() => setShow(false), 2200);
    const inTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
      setShow(true);
    }, 2500);

    return () => {
      clearTimeout(outTimer);
      clearTimeout(inTimer);
    };
  }, [index, show]);

  return (
    <span className="relative inline-block h-7 md:h-8">
      <span
        className={`
          absolute inset-0 w-full
          transition-all duration-500
          ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
          text-gradient-primary font-semibold
        `}
        aria-live="polite"
      >
        {TITLES[index]}
      </span>
    </span>
  );
}
