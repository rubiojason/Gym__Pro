import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap'

function JoinNowPage() {

    //useState 
    const joinTextFill = 'unset'
    const joinColor = 'rgb(255, 98, 41)'

    const [hamDisplay, setHamDisplay] = useState('none')
    const [hamOverlay, setHamOverlay] = useState('none')
    //useState

    //useRef 
    const backgroundAnim = useRef(null)
    const h1Anim = useRef(null)
    const buttonAnim = useRef(null) 
    //useRef 
    const size = useWindowSize();

    //function 
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
        gsap.fromTo(backgroundAnim.current, {}, {background: 'linear-gradient(0deg, red, rgba(0, 0, 0, 0.2))', duration: 3})
        gsap.fromTo(h1Anim.current, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 0.5})
        gsap.fromTo(buttonAnim.current, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 0.75})
    }, [])
    //useEffect

    return (
        <div className="page-container">

            <div className="hamburger-moving-page" style={{display: hamDisplay}}>
                <div className="top-x-container">
                    <div className='x' onClick={xClick}>X</div>
                </div>

                <div className="ham-div">
                    <Link to="/Gym-Pro/home">
                        <button className="ham-button">
                            Home
                        </button>
                    </Link>
                </div>

                <div className="ham-div">
                    <Link to="/Gym-Pro/about">
                        <button className="ham-button" >
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
                        <button className="ham-button" style={{color: joinColor, WebkitTextFillColor: joinTextFill}} >
                            Join Now
                        </button>
                    </Link>
                </div>

            </div>

            <div className="hamburger-back-overlay" onClikc={xClick} style={{display: hamOverlay}}></div>

            <div className="background-pic-div"></div>
            <div className="background-overlay-div"></div>
            <nav>
                <div className="nav-logo-container">
                    <Link to="/Gym-Pro/home">
                        <img alt="" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/326/4379945326_61521086-5f7b-4450-8a2f-e4263479db74.png?cb=1609798254"/>
                    </Link>
                </div>
                <div className="nav-right-container">
                    <div className="nav-right-content">
                        {
                            size.width <= 820 ? 
                                <div className="hamburger-container" onClick={hamburgerOpen}>
                                    <div className="hamburger-border"></div>
                                    <div className="hamburger-border"></div>
                                    <div className="hamburger-border"></div>
                                </div>

                                : 

                                <div id="nav-container">
                                    <Link to="/Gym-Pro/home">
                                        <button >
                                            Home
                                        </button>
                                    </Link>
        
                                    <Link to="/Gym-Pro/about">
                                        <button >
                                            About
                                        </button>
                                    </Link>
                                    
                                    <Link to="/Gym-Pro/exercise">
                                        <button >
                                            Exercises
                                        </button>
                                    </Link>
                                    
                                    <Link to="/Gym-Pro/join-now">
                                        <button style={{color: joinColor, WebkitTextFillColor: joinTextFill}}>
                                            Join Now
                                        </button> 
                                    </Link>
                                </div>
                        }
                   
                    </div>
                </div>
            </nav>

            <div className="join-page-container" ref={backgroundAnim}>
                    
                <h2 ref={h1Anim} className="join-now-h1">
                    What are you waiting for try our plan now! 
                </h2>

                <div ref={buttonAnim}>
                    <button>Join Now</button>
                </div>
                

            </div>
        </div>
    )
}

export default JoinNowPage
