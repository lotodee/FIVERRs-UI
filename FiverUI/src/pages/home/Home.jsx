import React from 'react'

import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from "../../components/slide/Slide"

import { cards ,projects ,gigs } from '../../data'
import CatCard from '../../components/catCard/CatCard'
import FeaturedGreen from '../../components/featuredGreen/FeaturedGreen'
import FeaturedBlue from '../../components/featuredBlue/FeaturedBlue'
import ProjectCard from '../../components/projectCard/projectCard'
import GigCard from '../../components/gigCard/GigCard'

const Home = () => {
  
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5}  arrowsScroll={5}>
      
        {cards.map((card=>{
          return(
          <CatCard key={card.id} item={card}/>
          )
        }))}
      </Slide>
      
    
      <FeaturedGreen/>
     <FeaturedBlue/>
     <Slide slidesToShow={4}  arrowsScroll={4}>
      
      {projects.map((project=>{
        return(
        <ProjectCard key={project.id} item={project}/>
        )
      }))}
    </Slide>
   
     </div>

    
  )
}

export default Home