import React from "react";
import { TagCloud } from "react-tagcloud";
import "./SkillSphere.css";

export default function SkillSphere() {
    const skills = [
        "JavaScript,", "React.js,", "Node.js,", "Express",
        "MongoDB", "HTML", "CSS", "Tailwind", "TypeScript", "Redux", "Next.js",
        "Framer Motion", "Git", "GitHub", "Bootstrap", "MUI", "Firebase",
        "REST API", "DSA", "C++", " java", "javafx", "jdbc", "AI Tools EXP"
    ];

    return (
        <div className="sphere-wrapper">
            <div className="sphere-3d">
                <TagCloud
                    minSize={18}
                    maxSize={32}
                    shuffle={false}          // 👈 ORDER FIXED
                    tags={skills.map((skill) => ({ value: skill, count: 40 }))}
                    className="tag-cloud"
                />
            </div>
        </div>
    );
}
