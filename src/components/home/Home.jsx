import heroImg from '../../assets/hero_image.png';
import shapeOne from '../../assets/shape_1.png';
import logo from '../../assets/logo_withi.png';
import './home.css'

const Home = () => {
  return (
    <section className = 'home' id='home'>
      <div className="home__container container">
        <div className="home__title">
          <div className="home__logo">
            <img src={logo} alt="Logo" />;
          </div>
          <p className="home__text">
            Organic & handipicked, curated planifolia beans, rich in flavor and aromas.
          </p>
        </div>

            <div className="home__banner">
              <img src={heroImg} alt="Logo"/>;
            </div>


            <div className="home__banner-bg">
              <img src={shapeOne} alt="Logo"/>;
            </div>


      </div>
    </section>
  )
}

export default Home
