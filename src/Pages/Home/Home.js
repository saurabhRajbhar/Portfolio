import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import Resume from "../../assets/docs/SAURABHCV.pdf";
import { Typewriter } from "react-simple-typewriter";
import SkillSphere from "../../Pages/Home/SkillSphere";

export default function Home() {
  return (
    <div className="home-wrapper">

      {/* 3D FLOATING SHAPES */}
      <motion.div
        className="floating-shape s1"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="floating-shape s2"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* LEFT SIDE TEXT */}
      <div className="home-left">

        <h1 className="hello-text">Hi,👋 I'm</h1>
        <motion.h1
          className="name-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span>Saurabh Rajbhar</span>
        </motion.h1>

        <h2 className="typewriter">
          <Typewriter
            words={[
              "Full Stack Developer",
              "MERN Stack Engineer",
              "JavaScript Developer",
              "React Specialist",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </h2>

        <div className="button-box">
          <motion.a
            href={Resume}
            download="Saurabh_Rajbhar_Resume"
            className="glow-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Download Resume
          </motion.a>


          <motion.button
            className="glow-btn outline"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore My Work ↓
          </motion.button>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <SkillSphere />
      </motion.div>

      {/* 
      <div className="home-right-code">
        <CodeBox />
      </div> */}

    </div>
  );
}
