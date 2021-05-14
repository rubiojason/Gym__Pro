import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function ExercisePage() {

        //useState 
        const exerciseTextFill = 'unset'
        const exerciseColor = 'rgb(255, 98, 41)'

        const [hamDisplay, setHamDisplay] = useState('none')
        const [hamOverlay, setHamOverlay] = useState('none')
        //useState
    
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
                        <button className="ham-button">
                            About
                        </button>
                    </Link>
                </div>

                <div className="ham-div">
                    <Link to="/Gym-Pro/exercise">
                        <button className="ham-button" style={{color: exerciseColor, WebkitTextFillColor: exerciseTextFill}}>
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
                                <button>
                                    Home
                                </button>
                            </Link>
        
                            <Link to="/Gym-Pro/about">
                                <button>
                                    About
                                </button>
                            </Link>
                        
                            <Link to="/Gym-Pro/exercise" >
                                <button style={{color: exerciseColor, WebkitTextFillColor: exerciseTextFill}}>
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

            <div className="exercise-page-container">
                <h1 className="exercise-name-h1">Shoulders</h1>

                <div className="exercise-grid-system">

                    <div className="exercise-img-container">
                        <img className="exercise-img" src="https://cdn2.omidoo.com/sites/default/files/imagecache/1200x630/images/headline/201708/dumbbellshoulderpress.jpg" alt="" />
                        <div className="exercise-name-div">Shoulder Press</div>
                    </div>

                    <div className="exercise-img-container">
                        <img className="exercise-img" src="https://thumbs.dreamstime.com/b/african-american-bodybuilder-lifting-hands-dumbbells-up-dumbbell-lateral-raise-black-studio-background-back-view-157663039.jpg" alt="" />
                        <div className="exercise-name-div">Lateral Raises</div>
                    </div>

                    <div className="exercise-img-container">
                        <img className="exercise-img" src="https://www.muscleandfitness.com/wp-content/uploads/2013/07/dumbbell-shrug.jpg?quality=86&strip=all" alt="" />
                        <div className="exercise-name-div">Dumbell Shrugs</div>
                    </div>

                    <div className="exercise-img-container">
                        <img className="exercise-img" src="https://www.muscleandfitness.com/wp-content/uploads/2018/05/1109-one-arm-dumbbell-row-back.jpg?quality=86&strip=all" alt="" />
                        <div className="exercise-name-div">Dumbbell Row</div>
                    </div>
                </div>

                <h1 className="exercise-name-h1">Chest</h1>

                <div className="exercise-grid-system">

                    <div className="exercise-img-container">
                        <img className="exercise-img" src="https://cdn1.coachmag.co.uk/sites/coachmag/files/2018/09/dumbbell-bench-press.jpg" alt="" />
                        <div className="exercise-name-div">Dumbbell Bench Press</div>
                    </div>

                    <div className="exercise-img-container">
                        <img className="exercise-img" src="https://cdn2.coachmag.co.uk/sites/coachmag/files/2016/07/dumbbell-flye.jpg" alt="" />
                        <div className="exercise-name-div">Dumbbell Flye</div>
                    </div>

                    <div className="exercise-img-container">
                        <img className="exercise-img" src="https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2018/03/incline-dumbbell-bench-press.jpg?itok=dxojJO86" alt="" />
                        <div className="exercise-name-div">Incline Dumbbell Press</div>
                    </div>

                    <div className="exercise-img-container">
                        <img className="exercise-img" src="https://i.ytimg.com/vi/XZ3XSwmk1Os/maxresdefault.jpg" alt="" />
                        <div className="exercise-name-div">Close Grip  Dumbbell Incline Press</div>
                    </div>
                </div>

                <h1 className="exercise-name-h1">Legs</h1>

                <div className="exercise-grid-system" style={{marginBottom: '50px'}}>

                    <div className="exercise-img-container">
                        <img className="exercise-img" src="https://cdn.muscleandstrength.com/sites/default/files/dumbbell-stiff-leg-deadlift.jpg" alt="" />
                        <div className="exercise-name-div">Dead Lift</div>
                    </div>

                    <div className="exercise-img-container">
                        <img className="exercise-img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/articles/2016/07/best-squat1-1480551373.jpg" alt="" />
                        <div className="exercise-name-div">Dumbbell Squat</div>
                    </div>

                    <div className="exercise-img-container">
                        <img className="exercise-img" src="https://www.fitfatherproject.com/wp-content/uploads/2018/11/stock-image-29520581-s-2015.jpg" alt="" />
                        <div className="exercise-name-div">Dumbbell Lunges</div>
                    </div>

                    <div className="exercise-img-container">
                        <img className="exercise-img" src="https://cdn1.coachmag.co.uk/sites/coachmag/files/2017/02/side-lunge-joe-wicks-fat-loss-workout.jpg" alt="" />
                        <div className="exercise-name-div">Side Lunges</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExercisePage
