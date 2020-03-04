import React, { useState } from 'react'
import AboutMe from './AboutMe'
import Skillls from './Skillls'
import {Link} from 'react-router-dom'



export default function NavBar() {


    const activePg=window.location.pathname
    console.log(activePg)

    const styleA={
        color:'yellow'
    }
    const styleB={
        color:'blue'
    }

    // useEffect(()=>{

    //     activePg === '/' ? styleA:styleB
    // })

    return (
        <div>
            <Link to='/'><button className='homeBtn' style={activePg === '/' ? styleA:styleB} >Home</button></Link>
            <Link to='skills'><button className='skillsBtn'style={activePg === '/skills' ? styleA:styleB}>Skillls</button></Link>
            <Link to='myprojects'> <button className='projBtn'>My Projects</button></Link>
            <Link to='contact'><button className='ctcBtn'>Contact</button></Link> 
        </div>
    )
}
