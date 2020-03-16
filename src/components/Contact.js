import React from 'react'

export default function Contact(props) {
    const activePg=window.location.pathname
    let history=props.history
    const clickHandlerContact=(e)=>{
        history.push('/myprojects')
    }

    return (
        <div>
            <div>
                <p>
                Phone Number: +381 64 5590571
                Home Address:Vidikovacki venac 31,Belgrade
                Email Address:jelena.andjelkovic453@gmail.com
                </p>
            </div>
            <button className='arrowBtn' onClick={clickHandlerContact}>back</button>

        </div>
        
    )
}
