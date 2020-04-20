import React from 'react'

export default function AboutMe(props) {
    // const activePg=window.location.pathname
    let history=props.history
    
    // let handleButtonStyle=props.handleButtonStyle
   
    // const yellow={
    //     color:'yellow'
    // }

    const clickHandler=(e)=>{
        history.push('/skills')
        // setSkills('clicked')
        // console.log(history.location)
        // setSkills(true)
      
    }


    return (
        <div>
            <div className='aboutme'>
                <h1>Hello,</h1>
                <h1>My name is Jelena Andjelkovic</h1>
                <p>Here you can find out more about me. For starters, I like JavaScript and React. </p>
                <p>All the good stuff is in My Projects section. Click on the image to go directly to the website or go to my GitHub account and check out the code.</p>
                <p>Hope you will like it, and if you don't, you can always send a message in the Contact section.</p>  
            </div>
            <div className='arrowDiv'>
            <div></div>
            
            <label className='arrow-title'>About Me</label>
            <button className='arrowBtn' onClick={clickHandler} ><img  alt={'arr'} src={'chevron-right.svg'} ></img></button>

            </div>
        </div>
        

    )
}
