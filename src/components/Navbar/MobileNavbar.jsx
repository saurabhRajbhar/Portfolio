
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FcHome,
    FcAbout,
    FcReading,
    FcBiotech,
    FcVideoProjector,
    FcPortraitMode,
    FcContacts,
} from "react-icons/fc";
import { FaBars, FaTimes } from "react-icons/fa";
import "./MobileNavbar.css";

const navItems = [
    { label: "Home", icon: <FcHome />, id: "home" },
    { label: "About", icon: <FcAbout />, id: "about" },
    { label: "Education", icon: <FcReading />, id: "education" },
    { label: "Tech Stack", icon: <FcBiotech />, id: "tech" },
    { label: "Projects", icon: <FcVideoProjector />, id: "projects" },
    { label: "Work Experience", icon: <FcPortraitMode />, id: "experience" },
    { label: "Contact", icon: <FcContacts />, id: "contact" },
];

export default function MobileNavbar() {
    const [open, setOpen] = useState(false);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    };

    return (
        <>
            {/* TOP BAR */}
            <div className="mobile-navbar">
                <h3 className="mobile-logo">Saurabh.dev</h3>

                <button className="menu-btn" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* SLIDE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                    >
                        {navItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="mobile-menu-item"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleScroll(item.id)}
                            >
                                <span className="menu-icon">{item.icon}</span>
                                <span className="menu-label">{item.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
