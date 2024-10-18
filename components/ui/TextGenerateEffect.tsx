"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  onComplete?: () => void;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className,
  onComplete,
}) => {
  const [scope, animate] = useAnimate();
  const [showProfession, setShowProfession] = useState(false);

  // Memoize wordsArray to avoid recalculating it on every render
  const wordsArray = useMemo(() => words.split(" "), [words]);

  // Memoize the animation logic to avoid re-creating it on every render
  const animateWords = useCallback(async () => {
    await animate(
      "span",
      { opacity: 1 },
      { duration: 1.5, delay: stagger(0.15) } // Reduced duration and stagger for faster animation
    );
    setShowProfession(true);
    if (onComplete) onComplete();
  }, [animate, onComplete]);

  useEffect(() => {
    animateWords();
  }, [animateWords]);

  const renderWords = useMemo(() => {
    return (
      <motion.div ref={scope} className="inline-block">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`${
              idx > 3 ? "text-purple" : "dark:text-white text-black"
            } opacity-0 inline-block mr-[0.25em]`}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }, [wordsArray, scope]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4 h-[100px] relative flex flex-col items-start justify-start">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords}
        </div>
        {showProfession && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} // Reduced duration for quicker appearance
            className="mt-2"
          >
            {/* Add your profession line and social icons here */}
          </motion.div>
        )}
      </div>
    </div>
  );
};
