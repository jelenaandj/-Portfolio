import React from 'react'
import {Link} from 'react-router-dom'



export default function NavBar() {

   
    // let page=window.location.pathname
// console.log(page)

    
return (
    <div className='navbar'>
        <Link to='/' className='btn' >Home</Link>
        <Link to='/skills'  className='btn'>Skills</Link>
        <Link to='/myprojects'  className='btn'>My Projects</Link>
        <Link to='/contact'  className='btn'>Contact</Link> 
    </div>
)

}
