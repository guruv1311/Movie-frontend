import React, { useState } from 'react';
import './Delete.css';
import previous from './previous.png';
import axios from 'axios'
import {Link} from 'react-router-dom'

  function Delete() {
    const [search,setSearch]=useState("");
    const searchBook=(evt)=>{
        
            axios.delete('http://127.0.0.1:8080/deleteid/'+search)
            .then( document.then( document.getElementById("dels").innerHTML = "deleted"))
            .catch(err=>console.log(err))

    }
    return (
        <>
        <div className='banner3'>
        <div className='navbar3'>
        <a><Link to="/Website">
          <img className='logo' src={previous} height="80px"/></Link></a>
          <ul>
            <li>
            <a><Link to="/Post">
              <a href='#'>POST</a></Link></a>
            </li>
            <li>
            <a><Link to="/Get">
              <a href='#'>GET</a></Link></a>
            </li>
            <li>
            <a><Link to="/Update">
              <a href='#'>UPADTE</a></Link></a>
            </li>
            <li>
              <a href=''>LOGINED</a>
            </li>
          </ul>
        </div>
        <div className="ca3">
          <h1>DELETE</h1>
              <label for="username">SERIAL NUM :</label><br></br>
                    <div className="search" >
                        <input type="text" placeholder="enter the serial number"  value={search} onChange={e=>setSearch(e.target.value)}/>
                        <button className='but' onClick={searchBook}>ENTER</button>
                 </div>
        </div> 
      </div>
      </>
        
    )
  }
  export default Delete
