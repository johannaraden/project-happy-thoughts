import React from 'react'
import moment from 'moment'

export const MessageCard = props => {
    const {_id, message, hearts, time} = props
    // destructures the data into props object
    return (
        <section className="card">
                <h4 key={props._id}>{props.message}</h4>
                <div className="card-details">
                    <span className={hearts > 10 ? "lots" : hearts > 5 ? "few" : "none" }>
                    <img className="heart" src="https://img.icons8.com/cotton/64/000000/like--v1.png"/>
                    </span>
                    <p className="like-p">x {hearts}</p>
                    <p className="time">{moment(time).fromNow()}</p>
                </div>
        </section>
  )
}
