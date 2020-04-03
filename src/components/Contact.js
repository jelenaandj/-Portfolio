import React from 'react'

export default function Contact(props) {
    const activePg=window.location.pathname
    let history=props.history
    
    const clickHandlerContact=(e)=>{
        history.push('/myprojects')
       
    }

    return (
        <div className='contact-container' >
            <div className='contact'>
            <div>
            <div className='iconsContact'>
                <img src={'phone.png'}></img><label>+381 64 5590571</label>
                </div>
                <div>
                <img src={'email.png'}></img><label>jelena.andjelkovic453@gmail.com</label>
                </div>
                <div>
                <img src={'linkedin.png'}></img><a className='linkedLink' href='https://www.linkedin.com/in/jelena-andjelkovic-a76422199/'><label>www.linkedin.com/in/jelena-andjelkovic-a76422199/</label></a>
                </div>
                <div>
                <img src={'github.png'}></img><a className='linkedLink' href='https://github.com/jelenaandj'><label>https://github.com/jelenaandj</label></a>
                </div>

            </div>
                
            <div className='form'>
                <h3>Send a Message</h3>
                <textarea type='text'></textarea>
                <input type='submit'className='form-button' value='Send'></input>
            </div>
            </div>

            <div className='arrowDiv'>
            <button className='arrowBtn' onClick={clickHandlerContact}><img src={'chevron-left.svg'}></img></button>
            <label className='arrow-title'>Contact</label>
            <div></div>
            </div>

        </div>
        
    )
}