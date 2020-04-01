import React, { useState } from 'react'

export default function Skills(props) {
   
    const activePg=window.location.pathname
    let history=props.history

    const clickHandlerBack=(e)=>{
        history.push('/')
    }

    const clickHandlerNext=(e)=>{
        history.push('/myprojects')
    }

    return (
        <div>
            <div className='skills'>
                <div className='skills-container'>
                    <div className='skills-icons'>
                    <label>HTML</label>
                    <img src={'html.svg'}></img>
                    </div>
                    <div className='skills-icons'>
                    <label>CSS</label>
                    <img src={'css.svg'}></img>
                    </div>
                    <div className='skills-icons'>
                    <label>JavaScript</label>
                    <img src={'javascript.png'}></img>
                    </div>
                    <div className='skills-icons'>
                    <label>React</label>
                    <img src={'react.png'}></img>
                    <div className='skills-break'>
                    </div>
                    </div>
                    <div className='skills-icons'>
                    <label>GIT</label>
                    <img src={'github.png'}></img>
                    </div>
                    <div className='skills-icons'>
                    <label>Firebase</label>
                    <img src={'firebase.png'}></img>
                    </div> <div className='skills-icons'>
                    <label>MySQL</label>
                    <img src={'mysql.png'}></img>
                    </div>
                </div>
            </div>
            <div className='arrowDiv'>
            <button className='arrowBtn'onClick={clickHandlerBack}><img src={'chevron-left.svg'} ></img> </button>
            <label className='arrow-title'>Skills</label>
            <button className='arrowBtn'onClick={clickHandlerNext}><img src={'chevron-right.svg'} ></img></button>
        </div>
        </div>
        
    )
}
