import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './Projects.css';
import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.png';
import project3 from '../assets/projects/project3.png';
import project4 from '../assets/projects/project4.png';
import project5 from '../assets/projects/project5.png';
import project6 from '../assets/projects/project6.png';
import project7 from '../assets/projects/project7.png';
import project8 from '../assets/projects/project8.png';
import project9 from '../assets/projects/project9.png';
import project10 from '../assets/projects/project10.png';
import project11 from '../assets/projects/project11.png';
import project12 from '../assets/projects/project12.png';
import project13 from '../assets/projects/project13.png';
import project14 from '../assets/projects/project14.png';
import project15 from '../assets/projects/project15.png';

export const Projects = () => {
    const [cards] = useState([
        {
            title:'Restaurant website',
            projectImg: project1,
            link: 'https://website-danagarout.vercel.app/'
        },
        {
            title:'Airbnb Clone',
            projectImg: project2,
            link:'https://airbnb-clone-eight-silk.vercel.app/'
        },
        {
            title:'Pricing Table',
            projectImg: project3,
            link:'https://pricing-table-nu.vercel.app/'
        },
        {
            title:'Coming Soon',
            projectImg: project4,
            link:'https://coming-soon-five-brown.vercel.app/'
        },
        {
            title:'Rating Page',
            projectImg: project5,
            link:'https://challenge8-chi.vercel.app/'
        },
        {
            title:'Instagram Clone',
            projectImg: project6,
            link:'https://challenge7-omega.vercel.app/'
        },
        {
            title:'Unit Converter',
            projectImg: project7,
            link:'https://challenge6-ochre.vercel.app/'
        },
        {
            title:'Basketball Score',
            projectImg: project8,
            link:'https://challenge-4-flame.vercel.app/'
        },
        {
            title:'Order Summary',
            projectImg: project9,
            link:'https://challenge3-alpha.vercel.app/'
        },
        {
            title:'Product Card',
            projectImg: project10,
            link:'https://product-card-five-brown.vercel.app/'
        },
        {
            title:'Feedback Page',
            projectImg: project11,
            link: 'https://feedbacks-roan.vercel.app/'
        },
        {
            title:'Card Details',
            projectImg: project12,
            link:'https://card-form-gold.vercel.app/'
        },
        {
            title:'Dark Mode',
            projectImg: project13,
            link:'https://dark-mode-flax.vercel.app/'
        },
        {
            title:'Password Generator',
            projectImg: project15,
            link: 'https://challenge5-brown.vercel.app/'
        },
        {
            title:'Sidebar Navbar',
            projectImg: project14,
            link:'https://sidebar-jet.vercel.app/'
        }
        


    ]);
  return (
    <div className='project-section'>
        <h3 className='home__text project-title'>My Projects</h3>
    <div className='projects'>
        
       
    {
        
        cards.map((card,i) => (
            
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Body className="project">
        <Card.Title className="card-title">{card.title}</Card.Title>
        <Card.Img variant="top" src={card.projectImg} />
        
          
         <div className='project-btn'>
         <Button className="pro-btn" variant="primary">
            <a rel="noreferrer" target="_blank" className="project-link" href={card.link}>View</a>
            </Button>

            </div> 
        </Card.Body>
      </Card> 
        ))
    }
    </div>
  </div>
  )
}
