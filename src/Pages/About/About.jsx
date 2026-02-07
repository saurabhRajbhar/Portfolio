import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import Image from "../../assets/docs/Images/ProfilePic.jpeg";

export default function About() {
    return (
        <section className="about-section" id="about">
            {/* TEXT */}
            <motion.div
                className="about-content"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h1 className="about-title">About Me</h1>

                <p className="about-para">
                    Hi, I’m <span className="highlight">Saurabh Rajbhar</span>, a passionate{" "}
                    <span className="highlight">MERN Stack Developer</span> who loves building
                    modern, scalable, and visually engaging web applications.
                </p>

                <p className="about-para">
                    I focus on <span className="highlight-soft">clean UI/UX</span>, smooth
                    animations, and maintainable code. Turning ideas into polished digital
                    experiences is what excites me the most.
                </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
                className="about-image-wrapper"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="image-glow"></div>
                <img src={Image} alt="Saurabh Rajbhar" />
            </motion.div>
        </section>
    );
}
