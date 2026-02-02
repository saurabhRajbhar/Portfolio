import React from "react";
import "./TechSphere.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function TechSphere() {
    return (
        <div className="sphere-wrap">
            <div className="sphere">
                <div className="dot"><FaReact /></div>
                <div className="dot"><SiJavascript /></div>
                <div className="dot"><FaNodeJs /></div>
                <div className="dot"><SiMongodb /></div>
                <div className="dot"><SiNextdotjs /></div>
                <div className="dot"><SiTailwindcss /></div>
            </div>
        </div>
    );
}
