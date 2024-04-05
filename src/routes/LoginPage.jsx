import LoginCard from '../components/LoginCard.jsx'

import './LoginPage.css';
const LoginPage = () => {  
  return (
    <body>
    <div>
      <h1>Login Page</h1>
      <LoginCard/>
    </div>
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="" alt="" />
          <input type="text" placeholder="Name"/>
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="Password" placeholder="Password"/>
        </div>
      </div>
      <div className="submit-container">
        <div className="submit">Log In</div>
      </div>
    </div>
    

    </body>
  );
}

export default LoginPage;