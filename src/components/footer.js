import React from "react";
import { Link } from "react-scroll";

const footer = () => {
    return (
        <div className="footer">


            <div className="footer-row">

                <Link smooth={true} to="home" offset={-110} className="nav-link smooth" href="/#">Home </Link>

                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/evan-st-martin-64307a8b/">LinkedIn</a>

                <a target="_blank" rel="noopener noreferrer" href="https://github.com/MantisTMD1">Github</a>


               



                <Link smooth={true} to="contact" offset={-107} className="nav-link smooth" href="/#">Contact </Link>


            </div >


            <p className="about-website">
                Built with React JS | WebDevEv |
                {/* updates year for me */}
                {new Date().getFullYear()}&nbsp;

            </p>

        </div >
    );
};

export default footer;
