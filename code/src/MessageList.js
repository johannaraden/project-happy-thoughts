import React, {useState, useEffect} from 'react'
import './MessageList.css'
import { MessageCard } from 'MessageCard'


export const MessageList = () => {

    const [messages, setMessages] = useState([]);
   

    useEffect(() => {
        fetch('https://technigo-thoughts.herokuapp.com/')
          .then((res) => res.json())
          .then((data) => {
            setMessages(data)
            console.log(data)
          })
      }, [])


      return (
        <section className="messages">
          {messages.map((message) => {
            return (
              <MessageCard 
              key={message._id} hearts={message.hearts} message={message.message} time={message.createdAt}
              />
            )
          })}
        </section>
      )
};

