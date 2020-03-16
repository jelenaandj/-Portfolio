import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutMe from '../components/AboutMe'
import Skillls from '../components/Skillls'
import MyProjects from '../components/MyProjects'
import Contact from '../components/Contact'

export default function Main() {


    return (
        <div>
            <Switch>
                <Route exact path='/' component={AboutMe} />
                <Route path='/skills' component={Skillls} />
                <Route path='/myprojects' component={MyProjects} />
                <Route path='/contact' component={Contact} />
            </Switch>
            
        </div>
    )
}
