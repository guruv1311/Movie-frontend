import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'
function Website() {
  return (
    <div className='banner'>
      <div className='navbar'>
        <h1 className='app'>UMOVIE</h1>
        {/* <img src='logo.png' className='logo' /> */}
        <ul>
          <li>
            <a><Link to="/Post">
            <a href='#'>POST</a>
            </Link></a>
          </li>
          <li>
          <a><Link to="/Get">
            <a href='#'>GET</a>
            </Link></a>
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
          <a><Link to="/Login">
            <a href=''>LOGIN</a>
            </Link></a>
          </li>
        </ul>
      </div>
      <div className='content'>
        <h1>MOVIE REVIEW</h1>
        <p>
        A good movie makes the audience feel like they've journeyed with the characters. ...
        <br />
No good movie is too long and no bad movie is short enough. ...
<br />
If it's a good movie, the sound could go off and the audience would still have a perfectly clear idea of what was going on.
          <br />
          press the bell icon to get latest updates.
        </p>
        <div>
          <button type='button'>
            <span></span>WATCH MORE
          </button>
          <button type='button'>
            <span></span> REVIEW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Website;
