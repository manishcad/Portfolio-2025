"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-2 items-center justify-center md:gap-4">
          {/* TITLE */}
          <h1 className="text-2xl md:text-6xl font-bold">
          Turning Ideas Into Code, One Line at a Time.
          </h1>
          {/* DESC */}
          <p className="text-sm md:text-xl">
          Hey 👋 everyone! I'm Manish Chand from India. I'm currently pursuing a Master's in Computer Applications and actively seeking job opportunities in the tech industry. I'm passionate about coding, problem-solving, and building innovative solutions. Looking forward to connecting and growing together!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
