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
            <div className='myprojects'>
                <p>p1</p>
                <p>p2</p>
                <p>p3</p>
            </div>
        <div className='arrowDiv'>
            <button className='arrowBtn'  onClick={clickHandlerBack}> <img src={'chevron-left.svg'} ></img> </ button>
            <label>My Projects</label>
            <button className='arrowBtn'onClick={clickHandlerNext}><img src={'chevron-right.svg'} ></img></button>
        </div>
           
        </div>
       
    )
}
