import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap'

function TopOfPage() {

    //useState 
    const homeTextFill = 'unset'
    const homeColor = 'rgb(255, 98, 41)'

    const [hamDisplay, setHamDisplay] = useState('none')
    const [hamOverlay, setHamOverlay] = useState('none')
    //useState

    //useRef 
    const h1Anim = useRef(null)
    const pAnim = useRef(null)
    const buttonAnim = useRef(null)
    const imgAnim = useRef(null) 
    //useRef 

    //functions 

        const size = useWindowSize();

        function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });
      
        useEffect(() => {
          // Handler to call on window resize
          function handleResize() {
            // Set window width/height to state
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }

          // Add event listener
          window.addEventListener("resize", handleResize);
          
          // Call handler right away so state gets updated with initial window size
          handleResize();
          
          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
      
        return windowSize;
    }

    const hamburgerOpen = () => {
        setHamDisplay('block')
        setHamOverlay('block')
    }

    const xClick = () => {
        setHamDisplay('none')
        setHamOverlay('none')
    }
    //functions 

    //useEffect 
    useEffect(() => {
        gsap.fromTo(h1Anim.current, {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: 1.5, delay: 0.5})
        gsap.fromTo(pAnim.current, {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: 1.5, delay: 0.5})
        gsap.fromTo(buttonAnim.current, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 0.5})
        gsap.fromTo(imgAnim.current, {x: 50, opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 0.5})
    }, [])
    //useEffect

    return (
        <div className="page-container">

            <div className="hamburger-moving-page" style={{display: hamDisplay}}>
                <div className="top-x-container">
                    <div className='x' onClick={xClick}>X</div>
                </div>

                <div className="ham-div">
                    <button className="ham-button" style={{color: homeColor, WebkitTextFillColor: homeTextFill}} >
                        Home
                    </button>
                </div>

                <div className="ham-div">
                    <Link to="/Gym-Pro/about">
                        <button className="ham-button">
                            About
                        </button>
                    </Link>
                </div>

                <div className="ham-div">
                    <Link to="/Gym-Pro/exercise">
                        <button className="ham-button">
                            Exercise
                        </button>
                    </Link>
                    
                </div>

                <div className="ham-div">
                    <Link to="/Gym-Pro/join-now">
                        <button className="ham-button" >
                            Join Now
                        </button>
                    </Link>
                    
                </div>
                
            </div>

            <div className="hamburger-back-overlay" onClick={xClick} style={{display: hamOverlay}}></div>

            <div className="background-pic-div-home"></div>
            <div className="background-overlay-div-home"></div>
            <nav>
                <div className="nav-logo-container">
                    <Link to="/Gym-Pro/home">
                        <img alt="" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/326/4379945326_61521086-5f7b-4450-8a2f-e4263479db74.png?cb=1609798254"/>
                    </Link>
                </div>
                <div className="nav-right-container">
                    <div className="nav-right-content">
                        {
                            size.width <= 475 ? 
                                <div className="hamburger-container" onClick={hamburgerOpen}>
                                    <div className="hamburger-border"></div>
                                    <div className="hamburger-border"></div>
                                    <div className="hamburger-border"></div>
                                </div>
                                : 
                                <div>
                                    <button style={{color: homeColor, WebkitTextFillColor: homeTextFill}}>
                                        Home
                                    </button>

                                    <Link to="/Gym-Pro/about">
                                        <button >
                                            About
                                        </button>
                                    </Link>
                            
                                    <Link to="/Gym-Pro/exercise">
                                        <button>
                                            Exercises
                                        </button>
                                    </Link>
                            
                                    <Link to="/Gym-Pro/join-now">
                                        <button>
                                            Join Now
                                        </button> 
                                    </Link> 
                                </div>
                        }
                        
                                               
                    </div>
                </div>
            </nav>

            <div className="home-page-container">

                <div className="left-home-page">

                        <h1 ref={h1Anim}>Gym Pro</h1>

                        <p ref={pAnim}>Tired of not having an exercise routine for your daily life.
                            Well we have free exercises that you can complete weekly. Or join us now 
                            and get our paid program course now.</p>

                        <div className="home-button-container" ref={buttonAnim}>
                            <Link to="/Gym-Pro/join-now">
                                <button className="home-page-join-button">Join Now</button>
                            </Link>
                        </div>
                </div>

                <div className="right-home-page" ref={imgAnim}>
                    <div className="right-home-inside-div">
                        <div className="img-overlay"></div>
                        <div className="img-over-2"></div>
                        <img className="home-image" alt="" src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                    </div>
                </div>

                
            </div>

        </div>
    )
}

export default TopOfPage
