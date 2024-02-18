import logo from './headerImg/onelogo.png'
import './Header.css'
import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';

export const Header = () => {

  useEffect(() => {
    scroller.scrollTo('container-card', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -150 // Ajuste conforme necessário para o posicionamento desejado
    });
}, []);

  return (
    <div className='container'>

      <div className='img'>
        <img src={logo} alt="Logo" className='imgLogo'/>
      </div>
      
    </div>
  )
}