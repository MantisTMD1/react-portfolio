import React from "react";
import redditBot from "../images/Redditbot.png";
import spotifyClone from "../images/spotifyclone.png";
import workPlanner from "../images/notetakerapp.png";
//reactjs pop up box//
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

    //reddit bot
    const openPopupRedditbot = () => {
        const content = (


            <fragement>
                <img className="portfolio-image-popup" id="redditbotimg" src={redditBot} alt="Reddit Bot..." />
                <p>This is Reddit Bot that can be triggered when mentioned on specfic subreddits related to Lex Fridman.</p>
                <b>Source Code:</b> <button className="modal-button" onClick={() => window.open("https://github.com/MantisTMD1/reddit_bot.py")}>Github Repo</button>
            </fragement>
        )
        PopupboxManager.open({ content })
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Reddit Bot"
                },
            },
        });
    }

    const popupboxConfigRedditbot = {
        titleBar: {
            enable: true,
            text: "Reddit Bot"

        },
        fadein: true,
        fadeInSpeed: 500

    }
    //google clone
    const openSpotifyClone = () => {
        const content = (


            <fragement>
                <img className="portfolio-image-popup" src={spotifyClone} alt="Spotify Clone..." />
                <p>This is a fully functioning Spotify App. Built with React and Spotify's API. <br></br>
                    This project is still under costruction.</p>
                <b>Source Code:</b> <button className="modal-button" onClick={() => window.open("https://github.com/MantisTMD1/spotify-clone")}> Github Repo</button>
            </fragement>
        )
        PopupboxManager.open({ content })
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Spotify Clone"
                },
            },
        });
    }

    const popupboxConfigSpotifyClone = {
        titleBar: {
            enable: true,
            text: "Google Clone"

        },
        fadein: true,
        fadeInSpeed: 500

    }
    //Workday Planner
    const openworkPlanner = () => {
        const content = (


            <fragement>
               
                <img className="portfolio-image-popup" src={workPlanner} alt="Workday Planner..." />
                <p>This is a web app that helps you schedule your work day from 9-5pm.</p>
                <b>Source Code:</b> <button className="modal-button" onClick={() => window.open("https://github.com/MantisTMD1/weekday-planner")}> Github Repo</button>
           
            </fragement>
        )
        PopupboxManager.open({ content });
    }

    const popupboxConfigworkPlanner = {
        titleBar: {
            enable: true,
            text: "Weekday Planner"

        },
        fadein: true,
        fadeInSpeed: 500

    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="contaianer">
                <h1 className="text-uppercase text-center py-5">some projects I've built</h1>


                {/*  */}
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupRedditbot}>
                        <img className="portfolio-image" src={redditBot} alt="Reddit Bot..." />
                        <div className="overflow">
                       

                        </div>
                    </div>

                    {/*  */}

                    <div className="portfolio-image-box" onClick={openSpotifyClone}>
                        <img
                            className="portfolio-image"
                            src={spotifyClone}
                            alt="Spotify Clone..."
                        />
                        <div className="overflow">
                            
                        </div>
                    </div>

                    {/*  */}

                    <div className="portfolio-image-box" onClick={openworkPlanner}>
                        <img
                            className="portfolio-image"
                            src={workPlanner}
                            alt="Note Taker App..."
                        />
                        <div className="overflow">
                            {/* <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> */}
                        </div>
                    </div>

                </div>
            </div>
            <PopupboxContainer {...popupboxConfigRedditbot} />
            <PopupboxContainer {...popupboxConfigSpotifyClone} />
            <PopupboxContainer {...popupboxConfigworkPlanner} />
        </div>
    );
};

export default Portfolio;
