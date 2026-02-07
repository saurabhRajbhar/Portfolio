import React, { useState } from "react";
import "./TechStack.css";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBg from "../../Pages/TechStack/ParticleBg";
import TechSphere from "../../Pages/TechStack/TechSphere";
import SkillCard from "../../Pages/TechStack/SkillCard";
import SkillModal from "../../Pages/TechStack/SkillModel";

// skill data (category + short description)
const SKILLS = [
    // Frontend

    { id: "react", name: "React.js", iconKey: "FaReact", cat: "Frontend", desc: "Component-based library for building UIs. Hooks, virtual DOM." },
    { id: "javafx", name: "JavaFX", iconKey: "FaJava", cat: "Tools", desc: "Java UI toolkit for desktop applications." },
    { id: "html", name: "HTML", iconKey: "FaHtml5", cat: "Frontend", desc: "Markup language for building web structure." },
    { id: "css", name: "CSS", iconKey: "FaCss3Alt", cat: "Frontend", desc: "Styling for web. Flexbox, Grid, responsive design." },
    { id: "redux", name: "Redux", iconKey: "SiRedux", cat: "Frontend", desc: "State management pattern/library for React." },
    { id: "bootstrap", name: "Bootstrap", iconKey: "SiBootstrap", cat: "Frontend", desc: "Responsive CSS framework with ready components." },
    { id: "mui", name: "MUI", iconKey: "SiMui", cat: "Frontend", desc: "React UI component library for production-ready UI." },
    { id: "framer", name: "Framer Motion", iconKey: "SiFramer", cat: "Frontend", desc: "Animation library for React — declarative, smooth transitions." },
    { id: "tail", name: "Tailwind", iconKey: "SiTailwindcss", cat: "Frontend", desc: "Utility-first CSS framework for fast UI building." },

    // Backend
    { id: "node", name: "Node.js", iconKey: "FaNodeJs", cat: "Backend", desc: "JavaScript runtime for backend services and APIs." },
    { id: "next", name: "Next.js", iconKey: "SiNextdotjs", cat: "Frontend", desc: "React framework for SSR, SSG and fullstack apps." },
    { id: "js", name: "JavaScript", iconKey: "SiJavascript", cat: "Frontend", desc: "Core language for web — DOM, ES6+, async, event-driven." },
    { id: "express", name: "Express", iconKey: "SiExpress", cat: "Backend", desc: "Minimal web framework for Node.js — REST APIs." },
    { id: "rest", name: "REST API", iconKey: "MdApi", cat: "Backend", desc: "Design style for web APIs; JSON-based endpoints." },
    { id: "cpp", name: "C++", iconKey: "SiCplusplus", cat: "Tools", desc: "Compiled language used for performance and algorithms." },
    { id: "java", name: "Java", iconKey: "FaJava", cat: "Tools", desc: "Object-oriented language used for backend & apps." },



    // Database
    { id: "mongo", name: "MongoDB", iconKey: "SiMongodb", cat: "Database", desc: "NoSQL database — document model (flexible schema)." },
    { id: "firebase", name: "Firebase", iconKey: "SiFirebase", cat: "Database", desc: "Realtime DB, auth, hosting and serverless services." },

    // Tools / Others
    { id: "git", name: "Git", iconKey: "FaGitAlt", cat: "Tools", desc: "Version control system for tracking changes." },
    { id: "github", name: "GitHub", iconKey: "FaGithub", cat: "Tools", desc: "Git hosting, PRs, CI/CD and collaboration." },
    { id: "dsA", name: "DSA", iconKey: "SiJavascript", cat: "Tools", desc: "Data Structures & Algorithms (problem solving)." },
    { id: "jdbc", name: "JDBC", iconKey: "FaJava", cat: "Tools", desc: "Java Database Connectivity (JDBC) for relational DBs." },
    { id: "ai", name: "AI Tools EXP", iconKey: "GrRobot", cat: "Tools", desc: "Experience using AI tools to boost productivity." },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Database", "Tools"];

export default function TechStack() {
    const [activeCat, setActiveCat] = useState("All");
    const [selected, setSelected] = useState(null); // skill id for modal

    const filtered = SKILLS.filter(s => activeCat === "All" ? true : s.cat === activeCat);

    return (
        <div className="tech-wrapper">
            <ParticleBg />
            <div className="tech-inner glass">
                <div className="tech-header">
                    <h1 className="tech-title">Tech Stack</h1>

                    <div className="filter-row">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${activeCat === cat ? "active" : ""}`}
                                onClick={() => setActiveCat(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="main-area">
                    <div className="left-area">
                        <div className="grid-area">
                            {filtered.map((skill, i) => (
                                <SkillCard key={skill.id} skill={skill} onClick={() => setSelected(skill)} index={i} />
                            ))}
                        </div>
                    </div>

                    <div className="right-area">
                        <TechSphere />
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <SkillModal skill={selected} onClose={() => setSelected(null)} />
                )}
            </AnimatePresence>
        </div>
    );
}
