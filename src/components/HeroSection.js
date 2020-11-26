import React from 'react';
import '../App.css';
import './HeroSection.css';
import styled from 'styled-components'

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`

function HeroSection() {
  return (
    <div className='hero-container'>
        <Img src='https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1531214497/bwknubrsto8uiaispumh.jpg'></Img>        
        <h1>Beauty Official</h1>
        <p>What are you waiting for?</p>
    </div>
  );
}
export default HeroSection;
