import React, { Component } from 'react'
import './Sign.css';
import axios from 'axios'
import {Link} from 'react-router-dom'
class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        password: '',
        email: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };  
  
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        username: this.state.username,
        password: this.state.password,        
        email: this.state.email,
      };
    
      axios.post('http://127.0.0.1:8080/post', data)
  };
  render() {
    return (
      <div className='body2'>
        <div className="img2"><img src="https://c8.alamy.com/comp/RC04FA/old-fashioned-movie-film-camera-logo-design-template-black-and-white-vector-illustration-RC04FA.jpg" width="750px" height="700px" alt="img"/>
        </div>
        <div className='box12'>
      <div className="card2">
        <form onSubmit={this.handleSubmit}>
        <h1>SIGN UP</h1>
              <label for="username">User Name :</label><br></br>
              <input type="text" className="username2" placeholder='Enter User name' height="50" 
              value={this.state.username}
              onChange={this.handleNameChange}/>
              {/* </input> */}
              <br></br>
              <br></br>
              <label for="password">New Password :</label><br></br>
              <input type="password" className="username2" placeholder="Enter password" 
              value={this.state.password}
              onChange={this.handlePasswordChange}/> 
              {/* </input> */}
              <br></br>
              <br></br>
              <label for="email">Email Id :</label><br></br>
              <input type="email" className="username2" placeholder='Enter Email Id' height="50" 
              value={this.state.email}
              onChange={this.handleEmailChange}/>
              {/* </input> */}
              <br></br>
              <br></br>
          <div className="center2">
          <a><Link to="/Login">
          <button className="btn2" type="submit">
            SIGN IN
          </button>
          </Link></a>
          </div>
         </form>
      </div> 
      </div>
</div>
    );
  }
}

export default Sign;