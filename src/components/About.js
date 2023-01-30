import React from 'react'
import './About.css'
import about from '../assets/about.jpg';
import { RiProfileLine } from "react-icons/ri";

export const About = () => {
  return (
    <div className='about-section'>
        <div className='about-left'>
            <div className='about-title'>
                <h1 className='me-title'>About Me</h1>
            </div>
            <div className='about-para'>
                <p>I'm in my last year at Goldsmiths, University of London, majoring in computer science with a concentration on web and mobile development.
                     My main focus is on developing websites and mobile applications, and frontend development is one of my main passions.</p>

            </div>
            <div className='para-2 about-para'>
                <p>I'm skilled in using the react library to create well-structured, gorgeous, and responsive websites.
                I love creating stunning, responsive, and useful online applications as a frontend developer.
                For making gorgeous site designs, I use Figma.
                </p>
            </div>
            <div className='resume-div'>
                <a target="_blank" rel="noreferrer" className='resume' href='https://drive.google.com/file/d/1nLDG_opHVbpFU-YsgSZqYo9B_n-GoC40/view?usp=sharing'>
                <RiProfileLine></RiProfileLine> Resume
                </a>
            </div>
        </div>
        <div className='about-right'>
            <img className='about-pic' src={about} alt=""></img>
        </div>
    </div>
  )
}
