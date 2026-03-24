import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";


function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <h1>{isLogin ? "Login Page" : "Signup Page"}</h1>

      {isLogin ? <Login /> : <Signup />}

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Signup" : "Login"}
      </button>
    </div>
  );
}

export default App;