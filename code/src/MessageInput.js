import React, { useState } from 'react'
import "./index.css"
import "./MessageInput.css"


const messageUrl = "https://technigo-thoughts.herokuapp.com/";

export const MessageInput = props => {

    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        fetch(messageUrl, {
            method: "POST",
            body: JSON.stringify({message}),
            headers: {"Content-Type": "application/json" }
            }
        )
        .then(() => {
        setMessage("")
        props.onFormSubmit(message)
        })
        
        .catch(error => console.log("error:", error))
    }


    return (
        <div>
            <form className="message-form">
                <h3>What's making you happy right now?</h3>
                <textarea
                rows='2'
                onChange={event => setMessage(event.target.value)}
                value={message}
                ></textarea>
                <button 
                    className="submit-button"
                    type="submit"
                    onSubmit={handleSubmit}
                    value="Submit"
                    disabled= {message.length < 6 || message.length > 140 ? true : false}
                    ><img className="heart" src="https://img.icons8.com/cotton/64/000000/like--v1.png"/>Send Happy Thought<img className="heart" src="https://img.icons8.com/cotton/64/000000/like--v1.png"/>
                </button>
                <p>{message.length}/140</p>
            </form>
        </div>
    )

}