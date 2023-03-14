import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, Icon, index }) => {
  return <p> {title} </p>;
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Nika Germanishvili - Skilled React Junior Developer with experience in
        React, JavaScript, Three.js, GSAP Animations, Tailwind.css, Styled
        Components, TypeScript, and Bootstrap. I recently had the pleasure of
        speaking with ChatGPT and am excited to apply my skills and experience
        to new opportunities. Passionate about taking on new challenges and
        creating visually stunning websites and applications. Age 22.
      </motion.p>

      <div className="mt-2 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default About;
