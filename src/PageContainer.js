import React, { useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './work/HomePage'
import AboutPage from './work/AboutPage'
import ExercisePage from './work/ExercisePage';
import JoinNowPage from './work/JoinNowPage';

function PageContainer(props) {

    //useEffect 
    useEffect(() => {
        console.log(props.pageInfo)
    }, [])
    //useEffect 
    
    return (
            <BrowserRouter>
                <Switch>

                    <Redirect exact from="/Gym__Pro" to="/Gym-Pro/home" />
                    
                    <Route path="/Gym-Pro/about" component={AboutPage} /> 

                    <Route path="/Gym-Pro/home" component={HomePage} />

                    <Route path="/Gym-Pro/exercise" component={ExercisePage} />

                    <Route path="/Gym-Pro/join-now" component={JoinNowPage} />

                </Switch>
            </BrowserRouter>
    )
}

export default PageContainer
