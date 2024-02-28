import heroImage from "../assets/hero-image.png";

const Home = () => {
  return (
    <div className="home">
      <div className="content-area">
        <p className="motto">A commitment to innovation and sustainability</p>
        <p>
          Etudes is a pioneering firm that seamlessly merges creativity and
          functionality to redefine architectural excellence.
        </p>
        <button>About us</button>
        <div className="hero-image">
          <img src={heroImage} alt="Logo image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
