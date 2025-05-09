
import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  initialDelay?: number;
}

export default function TypewriterEffect({ 
  text, 
  delay = 40,
  initialDelay = 500 
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    // Initial delay before starting to type
    const initialTimer = setTimeout(() => {
      setStartTyping(true);
    }, initialDelay);

    return () => clearTimeout(initialTimer);
  }, [initialDelay]);

  useEffect(() => {
    if (!startTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, startTyping]);

  return (
    <span className="inline-block">
      {displayedText}
      <span className="ml-0.5 animate-blink">|</span>
    </span>
  );
}
