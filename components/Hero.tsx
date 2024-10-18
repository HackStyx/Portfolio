import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  FaLocationArrow,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTelegram,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const [professionIndex, setProfessionIndex] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);

  const professions = useMemo(
    () => [
      { article: "a", profession: "Computer Science Engineer." },
      { article: "a", profession: "Full Stack Web Developer." },
      { article: "an", profession: "Open Source Contributor." },
      { article: "a", profession: "Freelancer." },
    ],
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [professions]);

  const containerVariants = useMemo(
    () => ({
      hidden: { width: 0 },
      visible: {
        width: "auto",
        transition: { duration: 2, ease: "linear" },
      },
      exit: {
        width: 0,
        transition: { duration: 2, ease: "linear" },
      },
    }),
    []
  );

  const textVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    }),
    []
  );

  const letterVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.2 },
      },
    }),
    []
  );

  const socialIcons = useMemo(
    () => [
      { icon: FaLinkedin, href: "https://linkedin.com/in/princekumargupta" },
      { icon: FaGithub, href: "https://github.com/HackStyx" },
      { icon: FaEnvelope, href: "mailto:princegupta8497@gmail.com" },
      { icon: FaTelegram, href: "https://t.me/prince_kumar_gupta" },
      { icon: FaInstagram, href: "https://instagram.com/_not.a.prince_" },
    ],
    []
  );

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  const renderProfession = useMemo(
    () => (
      <AnimatePresence mode="wait">
        <motion.div
          key={professionIndex}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="overflow-hidden flex items-baseline"
        >
          <span className="mr-1 whitespace-nowrap">
            {professions[professionIndex].article}
          </span>
          <motion.div
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {professions[professionIndex].profession
              .split("")
              .map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    ),
    [
      professionIndex,
      professions,
      containerVariants,
      textVariants,
      letterVariants,
    ]
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative">
      {/* Spotlights and Grid background (unchanged) */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content */}
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-6">
          {/* Heading */}
          <div className="h-[60px] flex items-center justify-center">
            <TextGenerateEffect
              words="Heyy There ! I'm Prince"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              onComplete={handleIntroComplete}
            />
          </div>

          {/* Profession line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: introComplete ? 1 : 0,
              y: introComplete ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className="h-16 flex items-center justify-center"
          >
            <div className="text-center md:tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-4xl flex items-center justify-center">
              I&apos;m
              <div className="flex items-center h-full ml-2 overflow-hidden">
                {renderProfession}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className={cn(
                    "block rounded-sm w-[4px] h-6 sm:h-8 md:h-10 bg-blue-500 ml-1"
                  )}
                ></motion.span>
              </div>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: introComplete ? 1 : 0,
              y: introComplete ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className="flex space-x-8 mb-2 h-8"
          >
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
              >
                <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            ))}
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: introComplete ? 1 : 0,
              y: introComplete ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className="-mt-4 h-12"
          >
            <a href="#projects">
              <MagicButton
                title="View My Projects"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
