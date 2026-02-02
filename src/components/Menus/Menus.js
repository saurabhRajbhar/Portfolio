import { motion } from "framer-motion";
import {
    FcAbout,
    FcBiotech,
    FcContacts,
    FcHome,
    FcPortraitMode,
    FcReading,
    FcVideoProjector,
} from "react-icons/fc";
import Images from "../../assets/docs/Images/Saurabhimage.jpeg";
import "./menus.css";

const menuItems = [
    { icon: <FcHome title="Home" />, label: "Home", id: "home" },
    { icon: <FcAbout title="About" />, label: "About", id: "about" },
    { icon: <FcReading title="Education" />, label: "Education", id: "education" },
    { icon: <FcBiotech title="Tech Stack" />, label: "Tech Stack", id: "tech" },
    { icon: <FcVideoProjector title="Project" />, label: "Projects", id: "projects" },
    { icon: <FcPortraitMode title="Work Experience " />, label: "Work Experience", id: "workexperience" },
    { icon: <FcContacts title="Contact" />, label: "Contact", id: "contact" },
];

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

export default function Menus({ toggle }) {
    return (
        <div className="menu-wrapper">

            {/* EXPANDED MENU */}
            {toggle ? (
                <>
                    {/* PROFILE IMAGE */}
                    <motion.div
                        className="navbar-profile-pic"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0 }}
                    >
                        <img src={Images} alt="profile" className="profile-img" />
                    </motion.div>

                    {/* MENU WITH LABELS */}
                    <motion.div
                        className="nav-items"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {menuItems.map((item, index) => (
                            <motion.div
                                className="nav-item"
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                whileHover={{ scale: 1.07, x: 8 }}
                                onClick={() => scrollToSection(item.id)}
                            >
                                <div className="nav-link enhanced-box">
                                    <span className="nav-icon-expanded">{item.icon}</span>
                                    <span className="nav-label">{item.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </>
            ) : (
                /* COLLAPSED MENU - ICONS with Title */
                <motion.div
                    className="nav-items-collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="collapsed-icon enhanced-icon"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.5 }}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.icon}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}
