"use client";
import React from "react";
import { Timeline } from "./ui/timeline";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Education: React.FC = () => {
  const timelineData = [
    {
      title: "2022 - 2026",
      content: (
        <div>
          <h4 className="text-xl font-semibold">B.E. - Computer Science & Engineering</h4>
          <p className="text-neutral-600 dark:text-neutral-400">Bangalore Institute of Technology, Bengaluru, Karnataka - 560004</p>
        </div>
      ),
    },
    {
      title: "2020 - 2021",
      content: (
        <div>
          <h4 className="text-xl font-semibold">Science : PCME</h4>
          <p className="text-neutral-600 dark:text-neutral-400">Rajkiya Pratibha Vikas Vidyalaya, Shalimar Bagh, Delhi - 110088</p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="relative h-24 w-full mb-8">
          <SparklesCore
            id="tsparticles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#8B5CF6"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 !text-purple-600"
              style={{ color: "#cbacf9" }}
            >
              Education
            </h2>
            <div className="h-1 w-full bg-purple-600 mt-2"></div>
          </div>
        </div>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default Education;
