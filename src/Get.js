import React, { Component } from 'react'
import axios from 'axios'
import './Get.css';
import {Link} from 'react-router-dom'
import previous from './previous.png';
class Get extends Component {
    state = {
        data: []
        }
      
        componentDidMount() {
        axios.get('http://127.0.0.1:8080/get')
          .then(response => {
            this.setState({ data: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      }
      
  render() {
    return (
        <>
        <div className='banner2'>
      <div className='navbar2'>
        {/* <h1 className='app1'>UMOVIE</h1> */}
        <a><Link to="/Website">
        <img className='logo' src={previous} height="80px"/></Link></a>
        <ul>
          <li>
          <a><Link to="/Post">
            <a href='#'>POST</a></Link></a>
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
      <div className="ca2">
        <table border={1}>
          <tr>
            <th>SerialNo</th>
            <th>Name</th>
            <th>Rating</th>
            <th>Director Name</th>
            <th>Year</th>
          </tr>
        <tbody>
          {this.state.data.map(user => (
            <tr key={user.serialno}>
              <td>{user.serialno}</td>
              <td>{user.name}</td>
              <td>{user.rating}</td>
              <td>{user.dirname}</td>
              <td>{user.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div> 
    </div>
    </>
    )
  }
}

export default Get;