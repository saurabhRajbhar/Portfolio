import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// images
import ecommerceImg from "../../assets/docs/Images/Projects/Ecom.png";
import studentImg from "../../assets/docs/Images/Projects/StudentManagementSys.png";
import lmsImg from "../../assets/docs/Images/Projects/LMS.png";
import dashboardImg from "../../assets/docs/Images/Projects/Admin analytics dashboard in action.png";

const projects = [
    {
        title: "E-Commerce Platform",
        image: ecommerceImg,
        desc: "Full-stack shopping platform with authentication and user dashboard.",
        points: [
            "JWT Authentication & Authorization",
            "Cart, checkout & order flow",
            "Admin product & order management",
            "Admin product & order management",
        ],
        tech: ["MERN", "JavaScript", "Bootstrap", "TailwindCSS", "Motion Effect"],
        github: "https://github.com/your-github/ecommerce",
        accent: "orange",
    },
    {
        title: "Student Management System",
        image: studentImg,
        desc: "Desktop application for managing student academic records.",
        points: [
            "JavaFX UI with Scene Builder",
            "CRUD operations using JDBC",
            "MySQL database integration",
            "Optimized form validation",
        ],
        tech: ["Java", "JavaFX", "JDBC", "MySQL"],
        accent: "blue",
    },
    {
        title: "Learning Management System",
        image: lmsImg,
        desc: "Online Education platform , That provides accessible & Comprehensive learning experiences.",
        points: [
            "User & admin roles",
            "Secure authentication",
            "Course upload & management",
            "Scalable MERN architecture",

        ],
        tech: ["MERN", "JWT", "MongoDB", "Bootstrap", "JavaScript"],
        accent: "purple",
    },
    {
        title: "Admin Analytics Dashboard",
        image: dashboardImg,
        desc: "Professional dashboard with analytics & role-based access.",
        points: [
            "Charts & reports",
            "Role-based authentication",
            "Reusable UI components",
        ],
        tech: ["React", "Chart.js", "JWT", "JavaScript", "TailwindCSS"],
        accent: "green",
    },
];

export default function Projects() {
    return (
        <div className="projects-section">
            <h1 className="projects-title">Projects</h1>

            <div className="projects-grid">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        className={`project-card ${p.accent}`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-img">
                            <img src={p.image} alt={p.title} />
                        </div>

                        <h2>{p.title}</h2>
                        <p className="project-desc">{p.desc}</p>

                        <ul className="project-points">
                            {p.points.map((pt, idx) => (
                                <li key={idx}>✔ {pt}</li>
                            ))}
                        </ul>

                        <div className="tech-stack">
                            {p.tech.map((t, idx) => (
                                <span key={idx}>{t}</span>
                            ))}
                        </div>

                        <div className="project-links">
                            {p.github && (
                                <a href={p.github} target="_blank" rel="noreferrer">
                                    <FaGithub /> GitHub
                                </a>
                            )}
                            {p.live && (
                                <a href={p.live} target="_blank" rel="noreferrer">
                                    <FaExternalLinkAlt /> Live
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
