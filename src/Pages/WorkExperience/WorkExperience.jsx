import React from "react";
import "./WorkExperience.css";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaBuilding } from "react-icons/fa";

export default function WorkExperience() {
    const experiences = [
        {
            title: "MERN Stack  Engineer",
            company: "Ridipt Technology / Progneur",
            date: "06/2023 – 03/2024",
            color: "blueCard",
            bullets: [
                "Built full-stack applications using MERN stack.",
                "Implemented JWT authentication & REST APIs.",
                "Optimized backend performance and database queries.",
                " Worked closely with UX / UI designers, QA engineers",
                "Collaborated with cross-functional teams .",
                " Developed responsive user interfaces using React.js.",
                " Integrated third-party APIs and services.",
            ],

        },
        {
            title: "Java Developer Intern",
            company: "Revolt Motors",
            date: "08/2022 – 12/2022",
            color: "greenCard",
            bullets: [
                " Learned fundamentals of software engineering through a structured training program. ",
                "Developed desktop applications using JavaFX.",
                "Implemented CRUD operations using JDBC & MySQL.",
                " Developed responsive user interfaces using React.js.",
                "Gained hands-on experience in building CRUD operations and integrating features into real-world applications.",
                "  Collaborated with senior developers to understand best practices.",
            ],
        },
        {
            title: "IT Support",
            company: "Fusion CX",
            date: "05/01/2026 – Present",
            color: "purpleCard",
            bullets: [
                "Provided technical support and issue resolution for end users.",
                "Handled troubleshooting for software, hardware, and network issues.",
                "Ensured SLA compliance and quick resolution turnaround.",
                "Maintained detailed documentation for support cases.",
            ],
        },
        {
            title: "Customer Support Executive (Chat Support & UGC Moderator)",
            company: "Elcamino Software Pvt. Ltd.",
            date: "09/2024 – 12/2025",
            color: "orangeCard",
            bullets: [
                "Handled customer queries exclusively via chat support.",
                "Resolved login, account, and product usage issues.",
                "Moderated user-generated content (UGC) as per guidelines.",
                "Logged issues, feedback, and resolutions in CRM tools.",
            ],
        },
    ];

    return (
        <section className="work-section">

            {/* HEADER */}
            <div className="work-main-header">
                <h1>Professional Journey</h1>
                <div className="work-title-wrapper">
                    <h2>Work Experience</h2>
                </div>
                <p className="work-sub">
                    My professional journey through various roles, technologies, and impactful projects
                </p>

                {/* STATS */}
                <div className="work-stats">
                    <motion.div whileHover={{ scale: 1.05 }} className="stat-card orange">
                        <h2>4</h2>
                        <p>Positions</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="stat-card purple">
                        <h2>1+</h2>
                        <p>Years</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="stat-card green">
                        <h2>3+</h2>
                        <p>Projects</p>
                    </motion.div>
                </div>
            </div>

            {/* EXPERIENCE CARDS */}
            <div className="experience-grid">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className={`exp-card ${exp.color}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="exp-header">
                            <h2>{exp.title}</h2>
                            <h4>
                                <FaBuilding /> {exp.company}
                            </h4>
                        </div>

                        <div className="exp-date">
                            <FaCalendarAlt /> {exp.date}
                        </div>

                        <ul className="exp-bullets">
                            {exp.bullets.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
