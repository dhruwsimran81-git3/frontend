import "../assets/css/home.css";
import profile from "../assets/profile/profile.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <img src={profile} alt="profile" className="profile-img" />

        <h1>Hi, I am Simran</h1>
        <h3>Frontend Developer Intern</h3>

        <p>
          I am passionate about building responsive and user-friendly web applications.
        </p>
      </div>
    </div>
  );
};

export default Home;