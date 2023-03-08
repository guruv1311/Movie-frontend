import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className='body1'>
        <div className="img"><img src="https://c8.alamy.com/comp/RC04FA/old-fashioned-movie-film-camera-logo-design-template-black-and-white-vector-illustration-RC04FA.jpg" width="750px" height="700px" alt="img"/>
        </div>
        <div className='box1a'>
      <div className="carda">
        <form>
        <h1>Login Form</h1>
          <label for="username">User Name :</label><br></br><br></br>
          <input type="text" className="username" placeholder='Enter User name' height="50">
          </input><br></br>
          <br></br>
          <label for="password">Password :</label><br></br><br></br>
          <input type="password" className="username" placeholder="Enter password" >
          </input><br></br>
          <br></br>
          <div className="centera">
          <a><Link to="/Website">
          <button className="btna">LOGIN</button></Link></a>
          </div>
          <center><h2 class="psw">CREATE AN ACCOUNT?</h2>
          <a><Link to="/Sign"> <a href="#">SIGN UP!</a></Link></a></center>
         </form>
      </div> 
      </div>
</div>
  );
}

export default Login;