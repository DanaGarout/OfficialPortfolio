import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import { FaGithub,FaLinkedin,FaWhatsapp} from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import './TopNav.css';
export const TopNav = () => {
  return (
    <Navbar className="navbar-bg"expand="lg">
      <Container>
      <Navbar.Brand href="#home">
        <img className='logo' src={logo} alt="logo">
            </img></Navbar.Brand>
        <Navbar.Toggle id="toggle-btn" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <div className='container'>
            <div className='logo-side'> 
            </div>

            {/* <div className='middle-part'>
                    <Nav className="me-auto">
                    <ul className="navbar d__flex">
                        <a className="anc-list active" href='#Home'><li className='focus nav__items mx__15'>Home</li></a>
                        <a className="anc-list" href='#About'><li className='nav__items mx__15'>About</li></a>
                        <a className="anc-list" href='#Portfolio'><li className='nav__items mx__15'>Portfolio</li></a>
                        
                    </ul>
                </Nav>

            </div> */}
            
          <div className='icons-side'>
          <Nav >
          <ul><a rel="noreferrer" target="_blank" href='https://github.com/DanaGarout'><li className='icons mx__15'><FaGithub></FaGithub></li></a></ul>
                    <ul><a rel="noreferrer" href='https://www.linkedin.com/in/dana-garout-0824a91b1/' target="_blank"><li className='icons mx__15'><FaLinkedin></FaLinkedin></li></a></ul>
                    <ul><a rel="noreferrer" target="_blank" href='https://wa.me/+966581802447'><li className='icons mx__15'><FaWhatsapp></FaWhatsapp></li></a></ul>
                    <ul><a rel="noreferrer" target="_blank" href='danagarout5@gmail.com'><li className='icons mx__15'><SiGmail></SiGmail></li></a></ul>
          </Nav>
          </div>
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
