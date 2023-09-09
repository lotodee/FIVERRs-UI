import React from 'react'
import "./Slide.scss"
import Slider from 'infinite-react-carousel';
import CatCard from '../catCard/CatCard';
import {cards} from "../../data.js"
const Slide = ({children , slidesToShow , arrowsScroll , centerPadding ,disableArrows}) => {
    
  return (
   
    <div className="slide">
        <div className="container">
    <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} centerPadding={centerPadding} disableArrows={disableArrows}>
            {children}
  </Slider>
        </div>
    </div>
  )
}

export default Slide
