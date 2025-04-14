import React, {useState} from 'react'

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Please login to your account</p>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            {/* 2 Way Handshake */}
            <input onChange={(e) => {
              setUsername(e.target.value)
            }} value={username} type="email" id="email" placeholder="Enter your email" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="login-options">
            <label className="remember-label">
              <input onChange={(e) => {
                setPassword(e.target.value)
              }} value={password} type="checkbox" id="remember" />
              Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="signup-text">
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default App;

// login -> build // 2 way handshake store // integrate

// onChange -> a -> variable -> value = {variable}