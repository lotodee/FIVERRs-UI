import React from 'react'
import "./Messages.scss"
import{Link} from "react-router-dom"
const Messages = () => {

  const [type ,setType] = ("buyer")
const currentUser ={
  id:1,
  username:"John Doe",
  isSeller:true,

};
const message= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur explicabo quos quo nisi saepe autem obcaecati, reiciendis dolorem nulla quibusdam debitis, iure, asperiores quod inventore quis molestiae quas beatae!"

  return (
   <div className="messages">
    <div className="container">
      <div className="title">
        <h1>Messages</h1>
        
      </div>
      <table>
       <tr>
        <th>Buyer</th>
        <th>Last Message</th>
        <th>Date</th>
        <th>Action</th>
       </tr>
  
      <tr className='active'>
        <td >John doe</td>
        <td><Link className='link' to="/message/123">{message.substring(0,100)}...</Link></td>
        <td>1 day ago</td>
        <td>
          <button>Mark as read</button>
        </td>
      </tr>
      <tr className='active'>
        <td >John doe</td>
        <td><Link className='link' to="/message/123">{message.substring(0,100)}...</Link></td>
        <td>1 day ago</td>
        <td>
          <button>Mark as read</button>
        </td>
      </tr>
      <tr>
        <td>John doe</td>
        <td><Link  className='link' to="/message/123">{message.substring(0,100)}...</Link></td>
        <td>1 day ago</td>
       
      </tr>
      <tr>
        <td>John doe</td>
        <td><Link  className='link' to="/message/123">{message.substring(0,100)}...</Link></td>
        <td>1 day ago</td>
       
      </tr>
      <tr>
        <td>John doe</td>
        <td><Link  className='link'to="/message/123">{message.substring(0,100)}...</Link></td>
        <td>1 day ago</td>
       
      </tr>
      </table>
    </div>
   </div>
  )
}

export default Messages