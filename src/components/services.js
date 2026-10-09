import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaNode, FaServer } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io5";

const Services = () => {
    return (
        <div id="Services" className="services">
            <h1 className="py-5">technologies</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle">  <i className = "icon-brand"><IoLogoJavascript size="4em" /></i> </div>

                            <h3>Frontend</h3>

                            <p>HTML/CSS/Javascript
                                <br></br>
                                Frameworks: Bootstrap & React.js
                                <br></br>
                                Designed with love
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"> <i className = "icon-brand"><FaNode size="4em" /></i> </div>
                            <h3>Backend</h3>
                            <p>Full stack web applications are built with:

                                <br></br>
                                MongoDB/Express/NODE.js</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"> <i className = "icon-brand"><FaServer size="4em" /></i> </div>
                            <h3>Hosting</h3>
                            <p>Source control: Github
                                <br>
                                </br>
                                Web-hosting: 
                                Netlify/Heroku/GitHub Pages

                            </p>

                        </div>
                    </div>



                </div>
            </div>
        </div>




    )
}

export default Services

