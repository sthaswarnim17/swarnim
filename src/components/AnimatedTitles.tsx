
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
    const outTimer = setTimeout(() => setShow(false), 1500);
    const inTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
      setShow(true);
    }, 1700);

    return () => {
      clearTimeout(outTimer);
      clearTimeout(inTimer);
    };
  }, [index, show]);

  return (
    <span className="relative inline-block w-full">
      <span
        className={`
          absolute left-0 w-full whitespace-nowrap overflow-hidden
          transition-all duration-300
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
