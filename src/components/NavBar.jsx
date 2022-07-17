import React from 'react'
import profile from '../assets/img/SharedScreenshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
  return (
    <nav className='primary-menu navbar navbar-expand-lg navbar-text-light border-bottom-0 position-fixed top-0 h-100'>
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
            <div>
                <a href="#home" className="mb-lg-auto mt-lg-4" style={{textDecoration: "none", fontSize: 20}}>
                    <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block" style={{backgroundColor: "#343a40"}}> 
                        <img src={profile} alt="profile_image" className="img-fluid rounded-pill d-block"/>
                    </span>
                    <h1 style={{textDecoration: "none", fontSize: 20}} className="text-white text-center mb-0 d-lg-block">Mauro Gomez</h1>
                </a>
            </div>
            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3 flex-column">
                <li class="nav-item"><a class="nav-link smooth-scroll" href="#home">Inicio</a></li>
                <li class="nav-item"><a class="nav-link smooth-scroll" href="#about">Sobre Mi</a></li>
                <li class="nav-item"><a class="nav-link smooth-scroll" href="#resume">Conocimientos</a></li>
                <li class="nav-item"><a class="nav-link smooth-scroll" href="#portfolio">Portafolio</a></li>
            </ul>
            <div className='w-100'>
                <ul className='list-unstyled d-flex justify-content-around redes-list' >
                    <li><a href='https://www.linkedin.com/in/maurogomezz/' target="_blank" rel='noreferrer' className='linkedin'><FontAwesomeIcon icon={faLinkedin}/></a></li>
                    <li><a href="https://github.com/MauroGomezz" target="_blank" rel='noreferrer' className='github'><FontAwesomeIcon icon={faGithub}/></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=541144018324" target="_blank" rel='noreferrer' className='whatsapp'><FontAwesomeIcon icon={faWhatsapp}/></a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar