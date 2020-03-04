import React from 'react'
import AboutMe from './AboutMe'
import Skillls from './Skillls'
import {Link} from 'react-router-dom'



export default function NavBar() {


    return (
        <div>
            <Link to='/'><button>Home</button></Link>
            <Link to='skills'><button>Skillls</button></Link>
            <Link to='myprojects'> <button>My Projects</button></Link>
            <Link to='contact'><button>Contact</button></Link> 
        </div>
    )
}
