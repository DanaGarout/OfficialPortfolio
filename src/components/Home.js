import React from 'react'
import profile from "../assets/me.jpeg";
import {FaHtml5,FaBootstrap,FaCode,
    FaReact,FaCss3 } from 'react-icons/fa';
import './Home.css'

export const Home = () => {
  return (
    <div className='home-content'>
        
        <div className='left-side'>
            <div className='titles'>
                <h1 className='home__text pz__10'>Welcome to my world</h1>
                <h2 className='home__text pz__10'>Hi, I'm Dana Garout</h2>
                <h3 className='home__text sweet pz__10'>Frontend Developer</h3>
                <h4 className='home__text pz__100'> </h4>
            </div>
            <div className='techs'>
                <ul className='tech-list'>
                    <li className='tech-icon'><FaHtml5></FaHtml5></li>
                    <li className='tech-icon'><FaBootstrap></FaBootstrap></li>
                    <li className='tech-icon'><FaReact></FaReact></li>
                    <li className='tech-icon'><FaCss3></FaCss3></li>
                    <li className='tech-icon'><FaCode/></li>
            </ul>
            </div>
        
        </div>
        
        <div className='right-side'>
            <img className="profile" src={profile} alt=""></img>
        </div>
    </div>
  )
}
