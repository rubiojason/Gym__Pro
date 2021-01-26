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

                    <Redirect exact from="/" to="/home" />
                    
                    <Route path="/about" component={AboutPage} /> 

                    <Route path="/home" component={HomePage} />

                    <Route path="/exercise" component={ExercisePage} />

                    <Route path="/join-now" component={JoinNowPage} />

                </Switch>
            </BrowserRouter>
    )
}

export default PageContainer
