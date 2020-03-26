import React, { useState } from 'react'
import "./index.css"
import "./MessageInput.css"


const message_url = "https://technigo-thoughts.herokuapp.com/";

export const MessageInput = props => {

    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        fetch(message_url, {
            method: "POST",
            body: JSON.stringify({message}),
            headers: {"Content-Type": "application/json" }
            }
        )
        .then(() => {
            setMessage("")
            props.onSubmit(message)
        })
        .catch(error => console.log("error:", error))
    }


    return (
        <div>
            <form className="message-form" onSubmit={handleSubmit}>
                <h3>What's making you happy right now?</h3>
                <textarea
                ></textarea>
                <button 
                    className="submit-button"
                    type="submit"
                    value="Submit"
                    disabled= {message.length > 6 ? true : false}
                    ><img className="heart" src="https://img.icons8.com/cotton/64/000000/like--v1.png"/>Send Happy Thought<img className="heart" src="https://img.icons8.com/cotton/64/000000/like--v1.png"/>
                </button>
            </form>
        </div>
    )

}