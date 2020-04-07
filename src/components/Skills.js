import React from 'react'




export default function Skills(props) {

   
    // const activePg=window.location.pathname
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
                    <img  alt={'arr'}src={'html.svg'}></img>
                    </div>
                    <div className='skills-icons'>
                    <label>CSS</label>
                    <img  alt={'arr'}src={'css.svg'}></img>
                    </div>
                    <div className='skills-icons'>
                    <label>JavaScript</label>
                    <img  alt={'arr'}src={'javascript.png'}></img>
                    </div>
                    <div className='skills-icons'>
                    <label>React</label>
                    <img  alt={'arr'}src={'react.png'}></img>
                    </div>
                    <div className='skills-break'>

                    </div>
                    <div className='skills-icons'>
                    <label>GIT</label>
                    <img alt={'arr'} src={'github.png'}></img>
                    </div>
                    <div className='skills-icons'>
                    <label>Firebase</label>
                    <img  alt={'arr'}src={'firebase.png'}></img>
                    </div> <div className='skills-icons'>
                    <label>MySQL</label>
                    <img  alt={'arr'}src={'mysql.png'}></img>
                    </div>
                </div>
            </div>
            <div className='arrowDiv'>
            <button className='arrowBtn'onClick={clickHandlerBack}><img  alt={'arr'}src={'chevron-left.svg'} ></img> </button>
            <label className='arrow-title'>Skills</label>
            <button className='arrowBtn'onClick={clickHandlerNext}><img alt={'arr'} src={'chevron-right.svg'} ></img></button>
        </div>
        </div>
        
    )
}
