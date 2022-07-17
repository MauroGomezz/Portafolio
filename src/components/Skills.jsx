import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faJs, faHtml5, faCss3Alt, faReact, faBootstrap, faSass, faGitAlt, faPhp } from '@fortawesome/free-brands-svg-icons'

const Skills = ({cv}) => {
  return (
    <section id="resume" className="section" style={{backgroundColor: "#343a40"}}>
      <div className="container px-lg-5"> 
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="title text-muted opacity-1 text-uppercase fw-semibold w-100 mb-0">Conocimientos</h2>
          <p className="subTile text-white fw-semibold position-absolute w-100 align-self-center lh-base mb-0">Estudios<span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span> </p>
        </div>
        <div className="row">          
            <div className="col-md-12">
            <h2 className="text-white fw-semibold mb-4">Mi Educacion</h2>
            <div className="bg-dark rounded p-4 mb-4">
              <p className="badge bg-danger text-2 fw-normal">2021</p>
              <h3 className="text-white">Bachiller en Ciencias Sociales</h3>
              <p className="text-primary">Secundario Ser Piero Da Vinci</p>
            </div>
            <div className="bg-dark rounded p-4 mb-4">
              <p className="badge bg-danger text-2 fw-normal">1 de Abril de 2022</p>
              <h3 className="text-white">Curso de Desarrollo Web en Html5 y Css3</h3>
              <p className="text-primary">Universidad Tecnológica Nacional</p>
              <p className="text-white-50 mb-0">Este curso está diseñado para que puedas idear, maquetar y finalmente realizar tus sitios web de manera profesional, basándonos en el código y utilizando HTML5 para confeccionar tus sitios dinámicos y adaptables a cualquier dispositivo visual: un monitor de PC, un teléfono móvil o una tablet.</p>
            </div>
            <div className="bg-dark rounded p-4 mb-4">
              <p className="badge bg-danger text-2 fw-normal">2 de Junio de 2022</p>
              <h3 className="text-white">Curso de Desarrollo Web con JavaScript</h3>
              <p className="text-primary">Universidad Tecnológica Nacional</p>
              <p className="text-white-50 mb-0">Conocer Javascript desde un punto de vista práctico y, al mismo tiempo, utilizar varias herramientas para dotar de dinamismo y funcionalidad a los sitios web en html con efectos que hasta ahora sólo se usaban con la introducción de Adobe Flash.</p>
            </div>
          </div>
        </div>
		<h2 className="text-white fw-semibold mt-4 mb-4">Conocimientos</h2>
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 text-center skilss-list pt-3">
            <div className="col">
                <FontAwesomeIcon name="HTML5" icon={faHtml5} className='icon html'/>
                <div className="p-3 text-light">HTML5</div>
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faCss3Alt} className='icon css'/>
                <div className="p-3 text-light">CSS3</div>
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faJs} className='icon js'/>
                <div className="p-3 text-light">JavaScript</div>
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faReact} className='icon react'/>
                <div className="p-3 text-light">React JS</div>
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faBootstrap} className='icon bs'/>
                <div className="p-3 text-light">Bootstrap 5</div>
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faSass} className='icon scss'/>
                <div className="p-3 text-light">SCSS</div>
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faGitAlt} className='icon git'/>
                <div className="p-3 text-light">GIT / GitHub</div>
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faPhp} className='icon php'/>
                <div className="p-3 text-light">PHP</div>
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faDatabase} className='icon bd'/>
                <div className="p-3 text-light">MySQL</div>
            </div>
        </div>
        <div className="text-center mt-5"><a href={cv} className="btn btn-outline-secondary rounded-pill shadow-none" download={cv}>Download CV <span className="ms-1"><i className="fas fa-download"></i></span></a></div>
      </div>
    </section>
  )
}

export default Skills