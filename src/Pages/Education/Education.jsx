import React from "react";
import "./Education.css";

const educationData = [
    {
        year: "2019 - 2023",
        degree: "Bachelor of Technology",
        school: "KMC Language Univercity",
    },
    {
        year: "2017 - 2018",
        degree: "Higher Secondary (12th)",
        school: "BGM Christian Inter College",
    },
    {
        year: "2016 - 2017",
        degree: "Secondary School (10th)",
        school: "BGM Christian Inter College",
    },
];

export default function Education() {
    return (
        <div className="edu-scroll-section">
            <h1 className="edu-title">Education Journey</h1>

            <div className="edu-horizontal-scroll">
                {educationData.map((item, index) => (
                    <div className="edu-glass-card" key={index}>
                        <h2>{item.year}</h2>
                        <h3>{item.degree}</h3>
                        <p>{item.school}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
