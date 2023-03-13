import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className={`${styles.heroHeadText}`}>
          <h1>
            Hi I am <span className="text-[#915eff]">Nika </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to my portfolio website! <br className="sm:block hidden" />{" "}
            I'm Nika Germanishvili, passionate{" "}
            <br className="sm:block hidden" /> and responsible web developer.
          </p>
        </div>
        </div>


        <ComputersCanvas />
    </section>
  );
};

export default Hero;
