import React from 'react'

export default function MyProjects() {
    console.log(window.location.pathname)
    return (
        <div>
            <div>
                <p>p1</p>
                <p>p2</p>
                <p>p3</p>
            </div>
        
            <button className='arrowBtn'>back</button>
            <button className='arrowBtn'>next</button>
        </div>
       
    )
}
