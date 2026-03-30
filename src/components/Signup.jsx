import "../assets/css/form.css";
import { Link } from "react-router-dom";
const Signup = () => {

    const handleSignup = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
    };


  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSignup}>
        <h2>Signup Page</h2>

        <input type="text" name="name" placeholder="Full Name" />

        <input type="email" name="email" placeholder="Email" />

        <input type="password" name="password" placeholder="Password" />

        <input type="password" name="password" placeholder="Confirm Password" />

        <button type="Submit">Signup</button>

        <p className="form-text">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
