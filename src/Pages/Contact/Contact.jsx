import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { sendMessage } from "../../Services/ContactApi.js"; // ✅ use API helper
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaClock,
    FaTools,
    FaRocket,
    FaUser,
    FaPenFancy,
    FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    // handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const res = await sendMessage(formData);

            setStatus({
                type: "success",
                message: res.message || "Message sent successfully 🚀",
            });

            setFormData({ name: "", email: "", message: "" });
            // / ✅ AUTO HIDE MESSAGE AFTER 3 SECONDS
            setTimeout(() => {
                setStatus({ type: "", message: "" });
            }, 3000);
        } catch (error) {
            setStatus({
                type: "error",
                message: error.message || "Something went wrong ❌ Please try again.",
            });
            // / ✅ AUTO HIDE MESSAGE AFTER 3 SECONDS
            setTimeout(() => {
                setStatus({ type: "", message: "" });
            }, 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-section">
            {/* TITLE */}
            <motion.h1
                className="contact-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Get In Touch
            </motion.h1>

            <p className="contact-subtitle">
                Let’s connect and build something <span>amazing</span> together 🚀
            </p>

            {/* INFO CARDS */}
            <div className="contact-highlight">
                <div className="highlight-card orange">
                    <FaClock />
                    <h3>Quick Response</h3>
                    <p>
                        Usually reply within <span>2–4 hours</span>
                    </p>
                </div>

                <div className="highlight-card purple">
                    <FaTools />
                    <h3>Always Building</h3>
                    <p>
                        Crafting digital experiences <span>24/7</span>
                    </p>
                </div>

                <div className="highlight-card green">
                    <FaRocket />
                    <h3>Ready to Collaborate?</h3>
                    <p>
                        Have an exciting project? Let’s bring your ideas to life with{" "}
                        <span>cutting-edge technology</span> and seamless execution.
                    </p>
                </div>
            </div>

            {/* MAIN AREA */}
            <div className="contact-wrapper">
                {/* LEFT CARD */}
                <div className="contact-info glass-card">
                    <h2>Contact Information</h2>

                    <div className="info-item">
                        <FaEnvelope />
                        <span>saurabhrajbhar@example.com</span>
                    </div>

                    <div className="info-item">
                        <FaPhoneAlt />
                        <span>+91 95018 52537</span>
                    </div>

                    <div className="info-item">
                        <FaMapMarkerAlt />
                        <span>India</span>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/your-linkedin"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <form className="contact-form glass-card" onSubmit={handleSubmit}>
                    <h2>Send a Message ✉️</h2>

                    <div className="input-group">
                        <FaUser />
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <FaEnvelope />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group textarea">
                        <FaPenFancy />
                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" disabled={loading}>
                        <FaPaperPlane />
                        {loading ? " Sending..." : " Send Message"}
                    </button>

                    {status.message && (
                        <motion.p
                            className={`form-status ${status.type}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {status.message}
                        </motion.p>
                    )}

                </form>
            </div>
        </div>
    );
}
