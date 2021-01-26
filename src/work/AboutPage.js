import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap'

function AboutPage() {

    //useState 
    const aboutTextFill = 'unset'
    const aboutColor = 'rgb(255, 98, 41)'

    const [hamDisplay, setHamDisplay] = useState('none')
    const [hamOverlay, setHamOverlay] = useState('none')
    //useState

    //useRef 
    const h1Anim = useRef(null)
    const pAnim = useRef(null)

    const pAnim2 = useRef(null)
    const buttonAnim = useRef(null) 
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
        gsap.fromTo(h1Anim.current, {y: 25, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 0.5})
        gsap.fromTo(pAnim.current, {y: -25, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 0.5})
    
        gsap.fromTo(pAnim2.current, {y: 25, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 0.5})
        gsap.fromTo(buttonAnim.current, {y: -25, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 0.5})
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
                        <button className="ham-button" style={{color: aboutColor, WebkitTextFillColor: aboutTextFill}}>
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

            <div className="background-pic-div-about"></div>
            <div className="background-overlay-div-about"></div>
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
                                    <Link to="/Gym-Pro/home">
                                        <button >
                                            Home
                                        </button>
                                    </Link>
                                    

                                    <Link to="/Gym-Pro/about" >
                                        <button style={{color: aboutColor, WebkitTextFillColor: aboutTextFill}}>
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

            <div className="about-page-container">
                <div className="about-page-grid-system">
                
                    <div className="box-text">
                        <h1 ref={h1Anim}>About Us</h1>
                        <p ref={pAnim}>We are a non-profit company arching to help those that 
                            want to physically challenge themselves and those who want to go to 
                            the next level.</p>
                    </div>

                    <div className="box-img">
                        <img style={{top: '0%'}} alt="" src="https://images.pexels.com/photos/4761785/pexels-photo-4761785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <div className="about-img-overlay"></div>
                        {/*<div className="about-page-img"></div>
                        <div className="about-page-img-overlay"></div>*/}
                    </div>

                    <div className="box-img">
                        <img style={{bottom: '0%'}} alt="" src="https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <div className="about-img-overlay"></div>
                        {/*<div className="about-page-img-2"></div>
                        <div className="about-page-img-overlay"></div>*/}
                    </div>

                    <div className="box-text">
                            <p ref={pAnim2}>We also have a free set of exercises that you can do weekly. </p>
                            
                            <div ref={buttonAnim}>
                                <Link to="/Gym-Pro/exercise">
                                    <button>Exercises</button>
                                </Link>
                            </div>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
