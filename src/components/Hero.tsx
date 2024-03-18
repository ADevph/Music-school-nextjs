"use client";
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";
 
const words = ` Dive into our courses and transform your musical journey today. 
                Join us to unlock your true potential. `;

const Hero = () => {
  return (
    <div className="h-auto bg-slate-900 md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden max-auto py-6 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <TextGenerateEffect words={words} className="mt-4 font-semibold md:text-lg text-neutral-300 max-w-4xl mx-auto " />
    
        {/* <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Embark on a transformative musical journey with our comprehensive array of music courses. Whether you're just starting out or seeking to refine your skills, immerse yourself in our offerings to unlock your true potential. Join us today and elevate your musical prowess to new heights.
        </p> */}

        <div className="mt-6">
          <Link href={"/courses"}>
            <Button borderRadius="1.75rem" className="">
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
