import React from "react";
import Typed from "react-typed"
import Particles from "react-tsparticles";

const header = () => {
    const particlesInit = (main) => {
        console.log(main);
    

      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <>
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          "particles": {
            "number": {
              "value": 40,
              "density": {
                "enable": true,
                "value_area": 800,
                
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 2,
                "color": "#ffffff"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#4cc9f0",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "push",
                "fps_limit":60
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 4
              }
            }
          },
          "retina_detect": true
        }
        }
      />
        <div id ="home" className="header-wrapper">
            <div className="main-info">
                    <Typed
                    className="typed-text"
                    strings={["React JS_", "Express JS_", "Node JS_", "MongoDB_" ]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                />

            </div>
        </div>
        </>
    )
}

export default header
