import profilePic from '../img/profile.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-pic-wrapper">
        <img src={profilePic} alt="Tybee Stewart" className="profile-pic" />
      </div>
      <h1>Tybee Stewart</h1>
      <h2>Web Designer</h2>
      <p>Welcome to my portfolio of personal projects I'm proud of!</p>
    </div>
  );
};

export default Home;
