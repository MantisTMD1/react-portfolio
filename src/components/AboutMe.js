import React from "react";
import Author from "../me.jpg";

const aboutMe = () => {
    return (
        <div id="about" className="aboutme-wrapper py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Author} alt="Author..." />
                    </div>
                </div>

                <div className="col-lg-5 col-xm-12">
                    
                    <div class="bouncing-text">
                         <div class="a">A</div>  
                        <div class="b">B</div>
                        <div class="o">O</div>
                        <div class="u">U</div>
                        <div class="t">T</div>
                        <div class="space">_</div>
                        <div class="m">M</div>
                        <div class="e">E</div>
                        <div class="shadow"></div>
                        <div class="shadow-two"></div>
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

export default aboutMe
