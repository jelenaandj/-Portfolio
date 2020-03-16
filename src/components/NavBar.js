import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'



export default function NavBar() {



    const styleA={
        color:'yellow'
    }
    const style={
        color:'blue'
    }
    const [style1,setStyle1]=useState(style)
    const [style2,setStyle2]=useState(style)
    const [style3,setStyle3]=useState(style)
    const [style4,setStyle4]=useState(style)
    

    const activePg=window.location.pathname

    const home='/'
    const skills='/skills'
    const myprojects='/myprojects'
    const contact='/contact'

    // console.log(activePg)

    // useEffect(()=>{

    //     activePg === home? setStyle1(styleA) : activePg === skills? setStyle2(styleA) : activePg === myprojects? setStyle3(styleA) : activePg === contact? setStyle4(styleA) : setStyle4(style)
    // },activePg)
    // const handleClick=(e)=>{
    //     activePg === home? setStyle1(styleA) : activePg === skills? 
    //     setStyle2(styleA) : activePg === myprojects? 
    //     setStyle3(styleA) : activePg === contact? setStyle4(styleA) : setStyle4(style)
    // }

 const handleClick1=(e)=>{
        if(activePg===home){
            setStyle1(styleA)
        }else{
            setStyle1(style)
        }
    }

    const handleClick2=(e)=>{
        if(activePg===skills){
            setStyle2(styleA)
        }else{
            setStyle2(style)
        }
    }

    const handleClick3=(e)=>{
        if(activePg===myprojects){
            setStyle3(styleA)
        }else{
            setStyle3(style)
        }
    }

    const handleClick4=(e)=>{
        if(activePg===contact){
            setStyle4(styleA)
        }else{
            setStyle4(style)
        }
    }
  
    
    return (
        <div>
            <Link to='/'><button className='homeBtn' style={style1} onChange={handleClick1}>Home</button></Link>
            <Link to='/skills'><button className='skillsBtn'style={style2}onChange={handleClick2}>Skillls</button></Link>
            <Link to='/myprojects'> <button className='projBtn'style={style3}onChange={handleClick3}>My Projects</button></Link>
            <Link to='/contact'><button className='ctcBtn'style={style4}onChange={handleClick4}>Contact</button></Link> 
        </div>
    )
}
