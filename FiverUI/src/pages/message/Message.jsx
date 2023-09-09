import React from 'react'
import { Link } from 'react-router-dom'
import "./Message.scss"
const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> > JOHN DOE
        </span>
        <div className="messages">
          <div className="item">
          <img
              src="/img/man.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ullam consequuntur aut animi qui delectus porro. Minus doloribus saepe adipisci, inventore enim odit, non accusamus nam optio sunt eos. Necessitatibus, minus. Totam voluptatibus nobis corrupti alias debitis ullam odit ex.
            </p>
          </div>
          <div className="item owner">
          <img
              src="/img/man.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ullam consequuntur aut animi qui delectus porro. Minus doloribus saepe adipisci, inventore enim odit, non accusamus nam optio sunt eos. Necessitatibus, minus. Totam voluptatibus nobis corrupti alias debitis ullam odit ex.
            </p>
          </div>
          <div className="item">
          <img
              src="/img/man.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ullam consequuntur aut animi qui delectus porro. Minus doloribus saepe adipisci, inventore enim odit, non accusamus nam optio sunt eos. Necessitatibus, minus. Totam voluptatibus nobis corrupti alias debitis ullam odit ex.
            </p>
          </div>
          <div className="item owner">
          <img
              src="/img/man.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ullam consequuntur aut animi qui delectus porro. Minus doloribus saepe adipisci, inventore enim odit, non accusamus nam optio sunt eos. Necessitatibus, minus. Totam voluptatibus nobis corrupti alias debitis ullam odit ex.
            </p>
          </div>
          <div className="item">
          <img
              src="/img/man.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ullam consequuntur aut animi qui delectus porro. Minus doloribus saepe adipisci, inventore enim odit, non accusamus nam optio sunt eos. Necessitatibus, minus. Totam voluptatibus nobis corrupti alias debitis ullam odit ex.
            </p>
          </div>
          <div className="item owner">
          <img
              src="/img/man.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ullam consequuntur aut animi qui delectus porro. Minus doloribus saepe adipisci, inventore enim odit, non accusamus nam optio sunt eos. Necessitatibus, minus. Totam voluptatibus nobis corrupti alias debitis ullam odit ex.
            </p>
          </div>
          <div className="item">
          <img
              src="/img/man.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ullam consequuntur aut animi qui delectus porro. Minus doloribus saepe adipisci, inventore enim odit, non accusamus nam optio sunt eos. Necessitatibus, minus. Totam voluptatibus nobis corrupti alias debitis ullam odit ex.
            </p>
          </div>
        
        </div>
        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message