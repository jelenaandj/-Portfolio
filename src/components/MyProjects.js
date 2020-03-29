import React from 'react'

export default function MyProjects(props) {
    console.log(window.location.pathname)
    let history=props.history

    const clickHandlerBack=(e)=>{
        history.push('/skills')
    }

    const clickHandlerNext=(e)=>{
        history.push('/contact')
    }
    return (
        <div>
            <div>
                <p>p1</p>
                <p>p2</p>
                <p>p3</p>
            </div>
        
            <button className='arrowBtn'onClick={clickHandlerBack}>back</button>
            <button className='arrowBtn'onClick={clickHandlerNext}>next</button>
        </div>
       
    )
}
