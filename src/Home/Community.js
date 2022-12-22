import React,{useEffect} from 'react';
import './Community.css';
import circle from '../images/moveimg.png';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import 'aos/dist/aos.css';
import Aos from 'aos'

function Community() {
  useEffect(()=>{
    Aos.init({duration:1500})
  },[])
  return (
    <div className='community-main'>
      <div className='community-left' data-aos="fade-right">

      
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>

  <MouseParallaxChild factorX={-0.8} factorY={-0.8}>
  <img src={circle} alt='Image' className='img-tag' />
  </MouseParallaxChild>
  
</MouseParallaxContainer>
        
      </div>
      <div className='community-right' data-aos="fade-left"> 
      <div className='community-right-title'>
       <p className='tittle-tag'> <span className='community'> Commnity </span> of over 100,000 people</p>
      </div>
      <div className='right-divider'></div>
      <div className='community-right-des'><p className='des-tag'>Join us and get involved in a number of ongoing educational activities run not only by the core team but also by the community directly.</p></div>
      <div className='right-btn'> <button className='right-btn-tag'> Get involved</button></div>
      </div>
    </div>
  )
}

export default Community
