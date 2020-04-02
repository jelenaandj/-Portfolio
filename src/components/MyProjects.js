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
                <div className='project1'>
                    <h3>Forum</h3>
                    <div>
                    <p>This is an application designed in a form of a forum.</p>
                    <p> Users can read discussions and messages prior to logging in. </p>
                    <p>After they have logged in, a number of possibilities are unlocked.</p>
                    <p> They can start discussions, send messages and modify their profile.</p>
                    </div>
                    
                    <img className='project-img' src={`https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1012&q=80`}></img>

                </div>
                <div className='project2'>
                    <h3>Budget App</h3>
                    <div>
                    <p>This is an application designed in a form of a forum.</p>
                    <p> Users can read discussions and messages prior to logging in. </p>
                    <p>After they have logged in, a number of possibilities are unlocked.</p>
                    <p> They can start discussions, send messages and modify their profile.</p>
                    </div>
                    <img className='project-img'src={`https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1012&q=80`}></img>

                </div>
                
                <div className='project3'>
                <h3>In progress</h3>
                    <div>
                    <p>This is an application designed in a form of a forum.</p>
                    <p> Users can read discussions and messages prior to logging in. </p>
                    <p>After they have logged in, a number of possibilities are unlocked.</p>
                    <p> They can start discussions, send messages and modify their profile.</p>
                    </div>
                    <img className='project-img'src={`https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1012&q=80`}></img>

                </div>
            </div>
        <div className='arrowDiv'>
            <button className='arrowBtn'  onClick={clickHandlerBack}> <img src={'chevron-left.svg'} ></img> </ button>
            <label className='arrow-title'>My Projects</label>
            <button className='arrowBtn'onClick={clickHandlerNext}><img src={'chevron-right.svg'} ></img></button>
        </div>
           
        </div>
       
    )
}
