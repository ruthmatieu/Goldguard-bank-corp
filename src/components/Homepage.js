import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import '../styles/homepage.css';

const Homepage = () => {

    const colorPalette = {
        darkgreen: '#026565',
        lightgreen: '#C4A06C',
        white: '#FFFFFF',
        offwhite: '#F0F6F6',
        peach: '#FC8372',
        black: '#232424'
    }

    return (
        <div>
            <div className='homepage-container'>
                <div className="homepage">
                    <div>
                        <h1>Goldguard Bank Corp.</h1>
                        <p>We help you track and trade Bitcoin more efficiently.</p>
                        <p>Sign up and get started with Goldguard today!</p>
                        <Link to='/register'><button>Register</button></Link>
                    </div>
                </div>
                <div className='login'>
                    <div className='login-border'>
                        <Login/>
                    </div>
                </div>
            </div>
            <div className='homepage-footer' style={{display: 'flex', height: '10vh'}}>
                <div className='details'>
                    <p>Find the GitHub to this project <a href='https://github.com/AfricanMarket' target="_blank" rel="noreferrer">here</a>.</p>
                </div>
                <div className='details'>
                    <p>Made by <a href='https://github.com/dterran2' target="_blank" rel="noreferrer">Donavan</a> and <a href='https://github.com/ruthmatieu' target="_blank" rel="noreferrer">Alanna</a> | a one week project</p>
                </div>
                <div className='details'>
                    <p>This project was made primarily with React</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;