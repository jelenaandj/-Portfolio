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
                <p>
                MySQL beginner React beginnerJavaScript beginner HTML beginner CSS beginner MS Office intermediate
                </p>
            </div>
            <div className='arrowDiv'>
            <button className='arrowBtn'onClick={clickHandlerBack}><img src={'chevron-left.svg'} ></img> </button>
            <label>Skills</label>
            <button className='arrowBtn'onClick={clickHandlerNext}><img src={'chevron-right.svg'} ></img></button>
        </div>
        </div>
        
    )
}
