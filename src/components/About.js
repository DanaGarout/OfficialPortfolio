import React from 'react'
import './About.css'
import about from '../assets/about.jpg';


export const About = () => {
  return (
    <div className='about-section'>
        <div className='about-left'>
            <div className='about-title'>
                <h1 className='me-title'>About Me</h1>
            </div>
            <div className='about-para'>
                <p>I'm at my senior year at Goldsmiths, University of London, majoring in computer science (web and mobile development).
                     My major interest is in developing websites and mobile applications, and frontend development is one of my main passions.</p>

            </div>
            <div className='para-2 about-para'>
                <p>I'm skilled in using the react library to create well-structured, delicate, and responsive websites.
                I am very passionate in creating stunning, responsive, and useful online applications as a frontend developer.
                I use Figma for making dazzling site designs.
                </p>
            </div>
            <div className='resume-div'>
                <a target="_blank" rel="noreferrer" className='resume' href='https://drive.google.com/file/d/1nLDG_opHVbpFU-YsgSZqYo9B_n-GoC40/view?usp=sharing'>
                 Resume
                </a>
            </div>
        </div>
        <div className='about-right'>
            <img className='about-pic' src={about} alt=""></img>
        </div>
    </div>
  )
}
