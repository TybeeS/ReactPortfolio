import profilePic from '../img/profile.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Tybee Stewart</h1>
      <h2>Aspiring Web Developer & Designer</h2>
      <p>
        Welcome to my potfolio of personal projects I'm proud of! <br />
      </p>
      <img src={profilePic} alt="Abigail Yanos" className="profile-pic" />
    </div>
  );
};

export default Home;
