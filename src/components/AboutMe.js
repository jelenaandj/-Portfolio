import React from 'react'

export default function AboutMe(props) {
    const activePg=window.location.pathname
    let history=props.history
    const clickHandler=(e)=>{
        history.push('/skills')
       console.log(history.location)

    }

    return (
        <div>
            <div>
                <h1>Hello, My name is Jelena Andjelkovic</h1>
                <p>For me, being a Web Developer is a perfect combination of creativity and problem solving.</p>
                <p>It keeps me motivated and eager to improve.</p>  
            </div>
            <button className='arrowBtn' onClick={clickHandler}>next</button>
        </div>
        

    )
}
