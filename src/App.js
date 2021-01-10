import React from 'react';
import './styles/App.css';
import { Switch, Route, Link } from 'react-router-dom';


//components
import Login from './components/Login'
import Register from './components/Register';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import About from './components/About';
import PrivateRoute from '../src/utils/PrivateRoute';
import DefaultError from './components/DefaultError';

//images
import logo from './images/logo.png'

function App() {

  const colorPalette = {
    darkgreen: '#27262C',
    lightgreen: '#C5DEDE',
    white: '#FFFFFF',
    offwhite: '#F0F6F6',
    peach: '#FC8372',
    black: '#232424'
  }

  const linkStyles = {
    textDecoration: 'none',
    margin: '0 auto',
    color: colorPalette.lightgreen,
    paddingLeft: '40px'
  }
  return (
    <div className="App">

      <nav style={{backgroundColor: colorPalette.darkgreen, borderBottom: '1px solid #C4A06C'}}>
        <div style={{paddingLeft: '30px'}}>
          <Link to='/'><img src={logo} alt='logo' style={{width: '150px'}}/></Link>
        </div>
        <div style={{padding: '10px 30px 0 0'}}>
          <Link to='/' style={linkStyles}>Home</Link>
          <Link to='/dashboard' style={linkStyles}>Dashboard</Link>
          <Link to='/about' style={linkStyles}>About</Link>
          <Link to='/register' style={linkStyles}><button className="register-btn">Register</button></Link>
        </div>
      </nav>

      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/' component={Homepage}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/about' component={About}/>
        <Route path='/error' component={Dashboard}/>
        {/* <Route path='/error' component={DefaultError}/> */}
        {/* <Route component={DefaultError}/> */}
      </Switch>
    </div>
  );
}

export default App;
