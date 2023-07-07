/* eslint-disable no-unused-vars */
import LogoTitle from '../../../assets/images/logo_sub.png'
import { Link } from 'react-router-dom'
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from '../Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass,] = useState('text-animate')


    return (
        <>
            <div className="container home-page">
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                    </h1>
                    <h1> I'm Andrew <br />
                        <br></br>
                        <img src={LogoTitle} alt='developer' />

                        <br />
                        <h1>Fullstack Developer</h1>
                    </h1>
                    <br></br>
                    <h2>React, Node, Express, JavaScript, TypeScript, T3, etc...</h2>
                    <Link to="/contact" className='flat-button'>Contact Me</Link>

                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home