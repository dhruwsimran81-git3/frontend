import React from 'react'
import "../assets/css/form.css";

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        alert(`Email: ${email}, Password: ${password}`);
    };
  return (
    <div className="form-container">
      <form className="form-card"
     onSubmit ={handleLogin}>
     <h2>Login Page</h2>

    <input type="email" name="email" placeholder="Enter Email" />
   
    <input type="password" name="password" placeholder="Enter Password" />
    
    <button type="submit">Login</button>

    <p className='form-text'>
      Don't have an account? <a href="/signup">Signup</a>
    </p>
      </form>
  </div> 
  );
};

export default Login
