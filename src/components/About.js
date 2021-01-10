import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/about.css';

//images
import alanna from '../images/alanna.jpg';
import heroImage from '../images/about-banner.png';

const About = () => {

    const colorPalette = {
        darkgreen: '#026565',
        lightgreen: '#C5DEDE',
        white: '#FFFFFF',
        offwhite: '#F0F6F6',
        peach: '#FC8372',
        black: '#232424'
    }

    return (
        <div className='about-container' style={{height: '100vh', display: 'grid', placeItems: 'center'}}>
            <div>
                <div className="about-hero-image">
                    <img src={heroImage} alt='banner'/>
                </div>
                <div>
                    <h1>Meet the team behind African Marketplace</h1>
                </div>
                <div style={{display: 'flex',  justifyContent: 'center'}}>
                    <div className='donavan' style={{backgroundColor: colorPalette.lightgreen, margin: '0 20px', padding: '30px 30px', borderRadius: '15px'}}>
                        <img style={{width: '170px', borderRadius: '50%'}} src='https://avatars1.githubusercontent.com/u/49881285?s=400&u=31eb8391ca76533c10110d6c9e39f5845fe092df&v=4' alt='Donavan'/>
                        <h3 tyle={{color: colorPalette.black}}>Donavan Terranova</h3>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <a href='https://github.com/dterran2' target="_blank" rel="noreferrer"><FaGithub style={{color: colorPalette.peach, width: '2rem', padding: '0 8px'}} /></a>
                            <a href='https://react-icons.github.io/search' target="_blank" rel="noreferrer"><FaLinkedin style={{color: colorPalette.peach, width: '2rem', padding: '0 8px'}} /></a>
                        
                        </div>
                    </div>
                    <div className='alanna' style={{backgroundColor: colorPalette.darkgreen, margin: '0 20px', padding: '30px 30px', borderRadius: '15px'}}>
                        <img style={{width: '170px', borderRadius: '50%'}} src={alanna} alt='Ruth Matieu'/>
                        <h3 style={{color: colorPalette.offwhite}}>Ruth Mathieu</h3>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <a href='https://github.com/ruthmatieu' target="_blank" rel="noreferrer"><FaGithub style={{color: colorPalette.peach, width: '2rem', padding: '0 8px'}} /></a>
                            <a href='https://www.linkedin.com/in/ruthmatieu/' target="_blank" rel="noreferrer"><FaLinkedin style={{color: colorPalette.peach, width: '2rem', padding: '0 8px'}} /></a>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default About;