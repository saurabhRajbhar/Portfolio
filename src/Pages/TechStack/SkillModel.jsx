import React from "react";
import { motion } from "framer-motion";

export default function SkillModal({ skill, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <motion.div
                className="modal-card"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(232, 224, 73, 0.02))",
                    padding: 22,
                    width: 420,
                    maxWidth: "92%",
                    borderRadius: 12,
                    border: "1px solid rgba(255,200,90,0.12)",
                    boxShadow: "0 18px 50px rgba(0, 0, 0, 0.6)",
                    color: "#9be314ff"
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <h3 style={{ margin: 0 }}>{skill.name}</h3>
                    <button onClick={onClose} style={{ background: "transparent", border: "none", color: "#fff", fontSize: 18, cursor: "pointer" }}>✕</button>
                </div>

                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>{skill.desc}</p>

                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                    <div style={{ padding: "6px 10px", background: "#1b1b1b", borderRadius: 8 }}>Level: <strong>Intermediate</strong></div>
                    <div style={{ padding: "6px 10px", background: "#1b1b1b", borderRadius: 8 }}>Used in: Projects</div>
                </div>

            </motion.div>
        </div>
    );
}
