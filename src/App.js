import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import SobreMi from "./components/SobreMi";
import './assets/styles.scss'
import cv from './assets/MAURO GOMEZcv.pdf'
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="main">
      <NavBar/>
      <div className="hero-content section d-flex vh-100" id="home">
        <div class="hero-mask opacity-75 bg-dark"></div>
        <div class="hero-bg parallax"></div>
        <section className="container my-auto" style={{zIndex: 2}}>
          <div className="col-12 text-center text-light">
            <h3 className="mb-3">Bienvenido</h3>
            <h2 class="fw-semibold text-white mb-2 mb-md-3 ">Soy Mauro Gomez</h2>
            <p class="text-light mb-4">Buenos Aires, Argentina</p>
            <a href="mailto:Mauro_18eze@hotmail.com" class="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2">Contactame</a>
          </div>
        </section>
      </div>
      <SobreMi cv={cv}/>
      <Skills cv={cv}/>
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
