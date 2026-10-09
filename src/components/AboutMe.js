import React from "react";
import Author from "../me.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="aboutme-wrapper py-5">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Author} alt="Author..." />
                    </div>
                </div>

                <div className="col-lg-5 col-12">
                    
                    <div className="bouncing-text">
                         <div className="a">A</div>  
                        <div className="b">B</div>
                        <div className="o">O</div>
                        <div className="u">U</div>
                        <div className="t">T</div>
                        <div className="space">_</div>
                        <div className="m">M</div>
                        <div className="e">E</div>
                        <div className="shadow"></div>
                        <div className="shadow-two"></div>
                    </div>

                    <p className="about-para">
                        Hello world! I'm Evan, a web developer based in Minneapolis, MN.
                        I work with multiple languages and constantly staying up to date with the latest tech.
                        If you like what you see on here, hit me up on Linkedin or shoot me an email. Otherwise, check out some of my projects below!
                    </p>
                </div>

            </div>

        </div>
    )
};

export default AboutMe
