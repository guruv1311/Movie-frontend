import './Post.css';
import previous from './previous.png';
import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
        serialno:'',
        name: '',
        rating: '',
        dirname: '',
        year: ''
    };
  }

  handleNoChange = (event) => {
    this.setState({ serialno: event.target.value });
  };

  
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };  
  
  handleratingChange = (event) => {
    this.setState({ rating: event.target.value });
  };

  handleDirChange = (event) => {
    this.setState({ dirname: event.target.value });
  };

  handleYearChange = (event) => {
    this.setState({ year: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        serialno: this.state.serialno,
        name: this.state.name,        
        rating: this.state.rating,
        dirname: this.state.dirname,
        year: this.state.year,
      };
    
      axios.post('http://127.0.0.1:8080/post', data)
  };
  render() {
    return (
      <>
    <div className='banner1'>
      <div className='navbar1'>
      <a><Link to="/Website">
        <img className='logo' src={previous} height="80px"/></Link></a>
        <ul>
          <li>
          <a><Link to="/Get">
            <a href='#'>GET</a></Link></a>
          </li>
          <li>
          <a><Link to="/Update">
            <a href='#'>UPADTE</a></Link></a>
          </li>
          <li>
          <a><Link to="/Delete">
            <a href='#'>DELETE</a></Link></a>
          </li>
          <li>
            <a href=''>LOGINED</a>
          </li>
        </ul>
      </div>
      <div className="ca">
        <form onSubmit={this.handleSubmit}>
        <h1>POST</h1>
            <label for="username">Serial No :</label><br></br>
            <input type="text" className="us" placeholder='Enter serial no' height="50"
            value={this.state.serialno}
            onChange={this.handleNoChange}>
            </input><br></br>
            <label for="name">Name :</label><br></br>
            <input type="text" className="us" placeholder="Enter Movie name" 
            value={this.state.name}
            onChange={this.handleNameChange}>
            </input><br></br>
            <label for="username">Rating :</label><br></br>
            <input type="text" className="us" placeholder='Enter rating' height="50"
            value={this.state.rating}
            onChange={this.handleratingChange}>
            </input><br></br>
  
            <label for="username">Director name :</label><br></br>
            <input type="text" className="us" placeholder='Enter Director name' height="50"
            value={this.state.dirname}
            onChange={this.handleDirChange}>
            </input><br></br>
            <label for="username">Year :</label><br></br>
            <input type="text" className="us" placeholder='Enter Year' height="50"
            value={this.state.year}
            onChange={this.handleYearChange}>
            </input><br></br>
          <div className="cen">
          <button className="bt" type="submit">ADD</button>
          </div>
         </form>
      </div> 
    </div>
    </>
    )
  }
}

export default Post;