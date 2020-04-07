import React, { useState } from 'react'
import "firebase/firestore";

// require("firebase/firestore");
const firebase = require("firebase");
// // Required for side-effects



export default function Contact(props) {
// let db=props.db

    var firebaseConfig = {
        apiKey: "AIzaSyBDhiEDGb8ZEYb619j1oxdU0DKXQbR73z0",
        authDomain: "portfolio-3d226.firebaseapp.com",
        databaseURL: "https://portfolio-3d226.firebaseio.com",
        projectId: "portfolio-3d226",
        storageBucket: "portfolio-3d226.appspot.com",
        messagingSenderId: "568564967690",
        appId: "1:568564967690:web:5913b5abfbc3f07f4d72f3",
        measurementId: "G-XCL8EQJNXF"
      };

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
    var db = firebase.firestore();
      ////////

    // const activePg=window.location.pathname
    let history=props.history
    const[name,setName]=useState()
    const[message,setMessage]=useState()

    
    const clickHandlerContact=(e)=>{
        history.push('/myprojects')
       
    }
    /////////////////

    const nameHandler=(e)=>{
        if(e.target.value !== ''){
            setName(e.target.value)
        }
    }
    const messageHandler=(e)=>{
        if(e.target.value !== ''){
            setMessage(e.target.value)
        }
    }
    const buttonHandler=(e)=>{
        db.collection('messages').doc(name).set({
            name,
            message
        })
        .then(function() {
            console.log("Document written ");
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
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
                <input type='text' placeholder='Your name or e-mail address' onChange={nameHandler}></input>
                <textarea type='text' placeholder='Message here' onChange={messageHandler}></textarea>
                <input type='submit'className='form-button' value='Send' onClick={buttonHandler}></input>
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