import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css'
import Delete from './Delete';
import Get from './Get';
import Login from './Login';
import Post from './Post';
import Sign from './Sign';
import Update from './Update';
import Website from './Website';

function App() {
    return (
    <Router>
        <div className="App">
        <Switch>
        <Route exact path="/" component={Website}></Route>
         <Route exact path="/Website" component={Website}></Route> 
        <Route exact path="/Post" component={Post}></Route>
        <Route exact path="/Get" component={Get}></Route>
        <Route exact path="/Sign" component={Sign}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Update" component={Update}></Route>
        <Route exact path="/Delete" component={Delete}></Route>
        </Switch>
        </div>
    </Router>
    );
}

export default App;




























// import React from 'react'
// import './Reg.css'
// function App() {
//   return (
//     <div className='body'>
//       <h1 className="h1">Register Form</h1>
//       <div className="card">
//         <form>
// <label for="username">User Name</label><br></br><br></br>
// <input type="text" className="username" placeholder='Enter User name'required>
// </input><br></br>
// <br></br>
// <label for="username">Email Id</label><br></br><br></br>
// <input type="text" className="username" placeholder='Enter Email id'required>
// </input><br></br>
// <br></br>
// <label for="password">New Password</label><br></br><br></br>
// <input type="password" className="username" placeholder="Enter new password">
// </input><br></br><br></br>
//           <br></br>
//           <div className="center">
//           <button className="btn">Register</button>
//           </div>
//  <center><h2 class="psw">Already register?</h2>
// <a href="https://www.w3schools.com/cssref/tryit.php?filename=trycss3_background_hero">Login here!!</a></center>
//         </form>
//       </div>
// </div> 
// );
// }
// export default App;