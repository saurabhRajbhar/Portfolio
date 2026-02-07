import React from "react";
import { motion } from "framer-motion";

// icon map (lazy import of icons from react-icons)
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiRedux, SiTypescript, SiNextdotjs, SiFramer, SiBootstrap, SiMui, SiFirebase, SiCplusplus } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { GrRobot } from "react-icons/gr";

const ICONS = {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaJava,
    SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiRedux, SiTypescript, SiNextdotjs, SiFramer, SiBootstrap, SiMui, SiFirebase, SiCplusplus,
    MdApi, GrRobot
};

export default function SkillCard({ skill, onClick, index = 0 }) {
    // map the key to the actual icon component; fallback to JS icon
    const Icon = ICONS[skill.iconKey] || SiJavascript;

    return (
        <motion.div
            className="skill-card"
            onClick={onClick}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, type: "spring", stiffness: 120 }}
        >
            <div className="skill-icon"><Icon /></div>
            <div className="skill-name">{skill.name}</div>
        </motion.div>
    );
}
