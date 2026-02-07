import React, { useState } from 'react'
import Home from '../../Pages/Home/Home';
import './layout.css';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Menus from '../Menus/Menus';
import About from '../../Pages/About/About';
import Education from '../../Pages/Education/Education';
import TechStack from '../../Pages/TechStack/TechStack';
import Projects from '../../Pages/Projects/Projects';
import WorkExperience from '../../Pages/WorkExperience/WorkExperience';
import Contact from '../../Pages/Contact/Contact';
import Navbar from '../Navbar/MobileNavbar';
const Layout = () => {
    const [toggle, setToggle] = useState(true);

    // now change toggle 
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className='sidebar-section'>
            <div className={toggle ? "sidebar-toggle sidebar " : " sidebar"}>
                <div className="sidebar-toggle-icons">
                    <Menus toggle={toggle} />
                    <p onClick={handleToggle}>
                        {
                            toggle ? (<AiOutlineDoubleLeft />) : (<AiOutlineDoubleRight />)
                        }
                        {/* <AiOutlineDoubleLeft size={30} /> */}
                    </p>
                </div>
            </div>
            <div className="container">
                <Navbar />
                <section id='home'> <Home /></section>
                <section id='about'> <About /> </section>
                <section id='education'> <Education /> </section>
                <section id='tech'> <TechStack /> </section>
                <section id='projects'> <Projects /> </section>
                <section id='workexperience'> <WorkExperience /> </section>
                <section id='contact'> <Contact /> </section>
            </div>
        </div>

    )
}

export default Layout;