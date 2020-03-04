import React from 'react'
import AboutMe from './AboutMe'
import Skillls from './Skillls'
const AboutMeLink=AboutMe.AboutMeLink
const SkillsLink=Skillls.SkillsLink


export default function NavBar() {


    return (
        <div>
            <nav>
            <AboutMeLink
            to="aboutMe" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className='aboutMe' 
            >

            </AboutMeLink>

            <SkillsLink>

            </SkillsLink>
            </nav>
            
        </div>
    )
}
