import React from "react";
import api_pelicula_img from '../assets/img/api-peliculas.png';
import todo_app_react_img from '../assets/img/todoApp.png';
import drag_and_drop_img from '../assets/img/dragDrop.png';
import weather_app from '../assets/img/weatherApp.png';
import umplash_app from '../assets/img/unplashApp.png';
import login_and_register from '../assets/img/login.png';

const Portfolio = () => {
  return (
  <section className="section bg-dark-1" id="portfolio">
    <div className="container px-lg-5">
      <div className="position-relative d-flex text-center mb-5">
        <h2 className="title text-muted text-uppercase fw-semibold w-100 mb-0">
          Portafolio
        </h2>
        <p className="subTile text-white fw-semibold position-absolute w-100 align-self-center lh-base mb-0">
          Mis Proyectos
          <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card h-100 border-0">
            <img src={api_pelicula_img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Api Peliculas</h5>
              <p class="card-text">
                Pagina hecha en React que utiliza la api de TMDB para mostrar peliculas y series
              </p>
              <a href="https://maurogomezz.github.io/Api-Peliculas" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">Pagina</a> <a className="btn btn-outline-warning btn-sm" href="https://github.com/MauroGomezz/Api-Peliculas" target="_blank" rel="noreferrer">Codigo</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src={todo_app_react_img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Todo App React</h5>
              <p class="card-text">Una lista de tareas simple hecha en React la cual cuenta con todas las opciones CRUD</p>
              <a className="btn btn-outline-primary btn-sm" href="https://jade-custard-bc9d3e.netlify.app/" target="_blank" rel="noreferrer" >Pagina</a> <a className="btn btn-outline-warning btn-sm" href="https://github.com/MauroGomezz/TodoAppReact" target="_blank" rel="noreferrer">Codigo</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src={drag_and_drop_img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Drag-and-Drop</h5>
              <p class="card-text">
                Esta pagina permite arrastrar una imagen hacia un recuadro selecciona y que este pueda reconocer el archivo y mostrarlo en pantalla
              </p>
              <a className="btn btn-outline-primary btn-sm" href="https://maurogomezz.github.io/Drag-and-Drop/" target="_blank" rel="noreferrer" >Pagina</a> <a className="btn btn-outline-warning btn-sm" href="https://github.com/MauroGomezz/Drag-and-Drop" target="_blank" rel="noreferrer">Codigo</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src={umplash_app} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">UnsplashApp</h5>
              <p class="card-text">
                Pagina hecha con React, PHP y MySQL para subir y borar imagenes que se almacenan en mi propia Api
              </p>
              <a className="btn btn-outline-primary btn-sm" href="https://maurogomezz.github.io/UnsplashApp/" target="_blank" rel="noreferrer" >Pagina</a> <a className="btn btn-outline-warning btn-sm" href="https://github.com/MauroGomezz/UnsplashApp" target="_blank" rel="noreferrer">Codigo</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src={weather_app} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Weather-App-React</h5>
              <p class="card-text">
                Pagina hecha en React que utiliza la Api de Weather para mostar el clima del lugar que introduzcas en el buscador
              </p>
              <a className="btn btn-outline-primary btn-sm" href="https://maurogomez-weather-api.netlify.app/" target="_blank" rel="noreferrer" >Pagina</a> <a className="btn btn-outline-warning btn-sm" href="https://github.com/MauroGomezz/Weather-App-React" target="_blank" rel="noreferrer">Codigo</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src={login_and_register} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Authentication App</h5>
              <p class="card-text">
                Pagina de login y registro de usuarios hecha en php con base de datos sql
              </p>
              <a className="btn btn-outline-primary btn-sm" href="https://login-y-registro-php.herokuapp.com/" target="_blank" rel="noreferrer" >Pagina</a> <a className="btn btn-outline-warning btn-sm" href="https://github.com/MauroGomezz/Login-y-registro-php" target="_blank" rel="noreferrer">Codigo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Portfolio;
