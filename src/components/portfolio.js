import React from "react";
import redditBot from "../images/Redditbot.png";
import spotifyClone from "../images/spotifyclone.png";
import workPlanner from "../images/notetakerapp.png";
import recipeRescue from "../images/reciperescue.jpg";
//reactjs pop up box//
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";


const projects = [
    {
        title: "Recipe Rescuer",
        image: recipeRescue,
        description: "An iOS app, live on the App Store, built with SwiftUI and SwiftData. It turns the ingredients in your kitchen into recipe ideas ranked by how few ingredients you're missing. Includes step-by-step cooking mode with timers, your own recipes, recipe scaling, diet filters and a shopping list, with recipe data from TheMealDB.",
        repo: "https://github.com/MantisTMD1/RecipeApp",
        appStore: "https://apps.apple.com/us/app/recipe-rescuer/id6821371384",
    },
    {
        title: "Reddit Bot",
        image: redditBot,
        description: "This is a Reddit Bot that can be triggered when mentioned on specific subreddits related to Lex Fridman.",
        repo: "https://github.com/MantisTMD1/reddit_bot.py",
    },
    {
        title: "Spotify Clone",
        image: spotifyClone,
        description: "This is a fully functioning Spotify App, built with React and Spotify's API. This project is still under construction.",
        repo: "https://github.com/MantisTMD1/spotify-clone",
    },
    {
        title: "Weekday Planner",
        image: workPlanner,
        description: "This is a web app that helps you schedule your work day from 9-5pm.",
        repo: "https://github.com/MantisTMD1/weekday-planner",
    },
];

const popupboxConfig = {
    titleBar: {
        enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500,
};

const Portfolio = () => {

    const openProject = (project) => {
        const content = (
            <>
                <img className="portfolio-image-popup" src={project.image} alt={`${project.title}...`} />
                <p>{project.description}</p>
                {project.appStore && (
                    <p><b>Get the App:</b> <button className="modal-button" onClick={() => window.open(project.appStore, "_blank", "noopener,noreferrer")}>App Store</button></p>
                )}
                <b>Source Code:</b> <button className="modal-button" onClick={() => window.open(project.repo, "_blank", "noopener,noreferrer")}>Github Repo</button>
            </>
        );
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: project.title,
                },
            },
        });
    };

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">some projects I've built</h1>


                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    {projects.map((project) => (
                        <div key={project.title} className="portfolio-image-box" onClick={() => openProject(project)}>
                            <img className="portfolio-image" src={project.image} alt={`${project.title}...`} />
                            <div className="overflow"></div>
                        </div>
                    ))}
                </div>
            </div>
            <PopupboxContainer {...popupboxConfig} />
        </div>
    );
};

export default Portfolio;
