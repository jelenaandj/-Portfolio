import React, { useState, useEffect } from 'react'
import AboutMe from './AboutMe'
import Skillls from './Skillls'
import {Link} from 'react-router-dom'



export default function NavBar() {

    const [style1,setStyle1]=useState({color:'blue'})
    const [style2,setStyle2]=useState({color:'blue'})
    const [style3,setStyle3]=useState({color:'blue'})
    const [style4,setStyle4]=useState({color:'blue'})
    

    const activePg=window.location.pathname

    const home='/'
    const skills='/skills'
    const myprojects='/myprojects'
    const contact='/contact'

    // console.log(activePg)
    
    const styleA={
        color:'yellow'
    }
    const style={
        color:'blue'
    }

    useEffect(()=>{
        activePg === home? setStyle1(styleA) : activePg === skills? setStyle2(styleA) : activePg === myprojects? setStyle3(styleA) : activePg === contact? setStyle4(styleA) : setStyle4(style)
    },activePg)

    return (
        <div>
            <Link to='/'><button className='homeBtn' style={style1} >Home</button></Link>
            <Link to='/skills'><button className='skillsBtn'style={style2}>Skillls</button></Link>
            <Link to='/myprojects'> <button className='projBtn'style={style3}>My Projects</button></Link>
            <Link to='/contact'><button className='ctcBtn'style={style4}>Contact</button></Link> 
        </div>
    )
}
