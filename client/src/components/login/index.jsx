import React, { useState, useEffect} from 'react'
import { usePostLoginMutation, usePostSignUpMutation } from '@/state/api'

const Login = ({ setUser, setSecret}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, resultLogin] = usePostLoginMutation();
  const [triggerSignUp] = usePostSignUpMutation();

  const handleLogin = () => {
      triggerLogin({ username, password });
  };

  const handleRegister = () => {
      triggerSignUp({ username, password });
  };

  useEffect(() => {
      if (resultLogin.data?.response) {
          setUser(username);
          setSecret(password);
      }
  }, [resultLogin.data]) // eslint-disable-line

  return (
    <div className="login-page">
      <div className="container">
        <div className="wrapper">
          <div className='form'>
            {isRegister ? (
              <h1>Sign up</h1>
            ) : (
              <h1>Login</h1>
            )}
            {isRegister ? (
              <h3>Sign up now and chat with your friends!</h3>
            ) : (
              <h3>Login now and chat with your friends!</h3>
            )}
            <input 
              type="text" 
              id="username" 
              placeholder="Username" 
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="pass-icon">
              <input 
                type="password" 
                id="password" 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src="https://cdn.pixabay.com/photo/2016/12/18/11/04/eye-1915454_960_720.png" alt='Login Background'/>
            </div>
            
            {isRegister ? (
              <button 
                type="button" 
                id="register-btn"
                onClick={handleRegister}
              >
                Sign up
              </button>
            ) : (
              <button 
                type="button" 
                id="login-btn"
                onClick={handleLogin}
              >
                Login
              </button>
            )}
            <div className="or">
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <button className="google-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
              </svg>
              Login with Google
            </button>
            {isRegister ? (
              <div className="register">
                <p>Already have an account?</p>
                <button className="register-btn" onClick={() => setIsRegister(!isRegister)}>Login</button>
              </div>
            ) : (
              <div className="register">
                <p>If you don't have an account</p>
                <button className="register-btn" onClick={() => setIsRegister(!isRegister)}>Register</button>
              </div>
            )}
          </div>  
        </div>
        <div className="main-img"></div>
      </div>
    </div>
  );
}

export default Login