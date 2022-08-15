import React from "react";

const SobreMi = ({ cv }) => {
  return (
    <section id="about" className="section bg-dark-1">
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="title text-muted text-uppercase fw-semibold w-100 mb-0">
            Sobre Mi
          </h2>
          <p className="subTile text-white fw-semibold position-absolute w-100 align-self-center lh-base mb-0">
            Conoceme Mas
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row gy-5">
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-white fw-semibold mb-3">
              Soy <span className="text-primary">Mauro Gomez,</span> un Web
              Developer Jr
            </h2>
            <p className="text-white-50">
              Soy un desarrolador de Buenos Aires Argentina autodidacta apasionado de la programacion con conocimientos tanto de Front-End como de Back-End 
            </p>
            <p className="text-white-50">
            Mi lenguaje de programación favorito es javascript, con él he aprendido muchas cosas y desarrollo actualmente. Mi objetivo es usarlo como herramienta para crear soluciones tecnológicas a la medida de cualquier necesidad. Estoy convencido de que el trabajo en equipo es la mejor forma de avanzar en cualquier trabajo o proyecto.
            </p>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul className="text-light list-unstyled my-info">
                <li>
                  <span className="fw-semibold me-2">Nombre:</span>Mauro Gomez
                </li>
                <li>
                  <span className="fw-semibold me-2">Email:</span>
                  <a
                    href="mailto:Mauro_18eze@hotmail.com"
                    className="text-decoration-none"
                  >
                    Mauro_18eze@hotmail.com
                  </a>
                </li>
                <li>
                  <span className="fw-semibold me-2">Edad:</span>19
                </li>
                <li className="border-0">
                  <span className="fw-semibold me-2">De:</span>Buenos Aires,
                  Argentina
                </li>
              </ul>
              <a
                href={cv}
                className="btn btn-primary rounded-pill"
                download={cv}
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
