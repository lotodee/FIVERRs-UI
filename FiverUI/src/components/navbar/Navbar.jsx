import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import {useLocation} from "react-router-dom"
import "./Navbar.scss"
import { useState } from 'react'

const Navbar = () => {

  const [active ,setActive] = useState(false)
  const [open , setOpen] = useState(false)
 const {pathname} = useLocation()
 console.log(pathname)

 const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false);

   
  }
  useEffect(()=>{
    window.addEventListener("scroll",isActive)

    return()=>{
      window.removeEventListener("scroll",isActive)

    }
},[pathname])

const currentUser = {
  id:1,
  username:"John Doe",
  isSeller:true
}

  return (
 <div className={(active || pathname !== "/" ) ? "navbar active" : "navbar" }>
<div className="container">
  <div className="logo">
<Link to="/" className='link'>
  <span className="text">fiverr</span>
  </Link>
  <span className="dot">.</span> 
  </div> 
  <div className="links">
    <span>Fiverr Business</span>
    <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          
          {!currentUser?.isSeller && <span>Become a Seller</span> }
          {!currentUser &&  <button>Join</button>}
          {currentUser && 
          <div className="user" onClick={()=>{setOpen(!open)}}>
            <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            <span>{currentUser?.username}</span>

           { open && (<div className="options">
            {currentUser?.isSeller && (
              <>
              <Link to='/mygigs' className='link'>Gigs</Link>
              <Link to="/add" className='link'>Add new Gig</Link>
              </>
            )}
            <Link to="/orders" className='link'>Orders</Link>
            <Link  to="/messages" className='link'>Messages</Link>
            <Link to="/" className='link'>Logout</Link>

            </div>)}
          </div>
          }
         
  </div>
</div>
{(active || pathname !=="/") && (
  <>
<hr/>
<div className="menu">
            <Link className="link " to="/">
              Graphics & Design
            </Link>
            <Link className="link " to="/">
              Video & Animation
            </Link>
            <Link className="link " to="/">
              Writing & Translation
            </Link>
            <Link className="link " to="/">
              AI Services
            </Link>
            <Link className="link " to="/">
              Digital Marketing
            </Link>
            <Link className="link " to="/">
              Music & Audio
            </Link>
            <Link className="link " to="/">
              Programming & Tech
            </Link>
            <Link className="link " to="/">
              Business
            </Link>
            <Link className="link " to="/">
              Lifestyle
            </Link>

</div>
<hr/>
</>
)
}
 </div>
  )
}

export default Navbar
