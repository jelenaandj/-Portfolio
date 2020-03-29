import React from 'react'

export default function Skillls(props) {
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
            <div>
                <p>
                MySQL beginner React beginnerJavaScript beginner HTML beginner CSS beginner MS Office intermediate
                </p>
            </div>
            <button className='arrowBtn' onClick={clickHandlerBack}>back</button>
            <button className='arrowBtn' onClick={clickHandlerNext}>next</button>
        </div>
        
    )
}
