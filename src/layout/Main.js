import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import MyProjects from '../components/MyProjects'
import Contact from '../components/Contact'

export default function Main(props) {

   

    return (
        <div className='main'>
            <Switch>
                <Route exact path='/' component={AboutMe}  />
                <Route path='/skills' component={Skills} />
                <Route path='/myprojects' component={MyProjects} />
                <Route path='/contact' component={Contact} />
            </Switch>
            
        </div>
    )
}
