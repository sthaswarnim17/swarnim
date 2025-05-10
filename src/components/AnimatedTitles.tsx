
import React, { useEffect, useState } from "react";

const TITLES = [
  "Graphics Designer",
  "Creative Thinker", 
  "Visual Storyteller"
];

export default function AnimatedTitles() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [letters, setLetters] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (show && !isComplete && !isDeleting) {
      if (letters.length < TITLES[index].length) {
        const timer = setTimeout(() => {
          setLetters(TITLES[index].substring(0, letters.length + 1).split(''));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        setIsComplete(true);
        const timer = setTimeout(() => {
          setIsDeleting(true);
          setIsComplete(false);
        }, 1500);
        return () => clearTimeout(timer);
      }
    } else if (isDeleting) {
      if (letters.length > 0) {
        const timer = setTimeout(() => {
          setLetters(letters.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % TITLES.length);
      }
    }
  }, [index, letters, isComplete, isDeleting, show]);

  return (
    <span className="relative inline-block w-full">
      <span
        className="
          absolute left-0 w-full whitespace-nowrap overflow-hidden
          text-gradient-primary font-semibold
        "
        aria-live="polite"
      >
        {letters.join('')}
        <span className="animate-blink">|</span>
      </span>
    </span>
  );
}
