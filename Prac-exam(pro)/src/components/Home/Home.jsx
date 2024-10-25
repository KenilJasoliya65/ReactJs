import CustomNavbar from '../Navbar/CustomNavbar';
import Typing from './Typing';
import port1 from '../Image/ports.jpg';
import powers from '../Image/powers.jpg';
import solars from '../Image/solars.jpg';
import './Home.css';

function Home() {
    const text = "shaping a new future";
    const text1 = "Tech Driven Integrated Logistics";
    const text2 = "clean energy for a better tomorrow";
    const delay = 100;
    const delay1 = 200;
    const delay2 = 300;

  return (
    <>
    {/* slider */}
    <CustomNavbar />
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={powers} className="d-block w-100 h-100" id="slide-img" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h3>Empowering India – <Typing text={text} delay={delay} /></h3>
      <p>Committed to india's energy security</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={port1} className="d-block w-100 h-100" id="slide-img" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h3>Adani Ports - <Typing text={text1} delay={delay1} /></h3>
        <p>Sustainability is our growth mantra</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={solars} className="d-block w-100" id="slide-img" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h3>Adani Solar -<Typing text={text2} delay={delay2} /></h3>
        <p>Changing the way our world is powered.
        </p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    {/* slider end */}
    </>
   
  )
}

export default Home;