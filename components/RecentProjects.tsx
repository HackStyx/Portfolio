"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from 'next/image';

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A curated list of my{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/bg.png"
                    alt="background"
                    className="w-full h-full object-cover opacity-50"
                    width={1920}
                    height={1080}
                  />
                </div>
                <Image
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0 w-full h-auto max-h-full object-contain"
                  width={500}
                  height={500}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${8 * index}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={`Tech icon ${index + 1}`}
                        className="p-1.5"
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-purple hover:underline"
                >
                  <p className="lg:text-xl md:text-xs text-sm">
                    GitHub
                  </p>
                  <FaLocationArrow className="ms-3" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
