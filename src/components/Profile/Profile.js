import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <h1>Hello!</h1>
      <p>This website was created for presentation purposes by:</p>
      <br />
      <img src={process.env.PUBLIC_URL + "/face.jfif"} className="person" alt="A picture of me"></img>
      <h1>Grace Y. Lin</h1>
      <h2>Software Engineer</h2>
      <h3>Summer Intern 2021</h3>
    </div>
  );
};

export default Profile;
