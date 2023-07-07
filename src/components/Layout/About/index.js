/* eslint-disable no-unused-vars */
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters/index";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGit, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <br>
                    </br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>

                        Hi, My name is Andrew, I'm a 26 year old, self taught and
                        professionally guided front end react developer based in Florida at
                        the moment.
                    </p>
                    <p>
                        I have experience building and deploying fully responsive webpages
                        through github and netlify using Express, HTML, CSS, SASS, JAVASCRIPT,
                        Bootstrap, NPM, Node.
                    </p>
                    <p>@YSKSADBOY</p>
                </div>
                <br></br>
                <br></br>

                <div className="stage-cude-cont">
                    <div className='cubespinner'>
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color="#3e5cd2" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faReact} color="#3e5cd2" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faHtml5} color="#3e5cd2" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faCss3} color="#3e5cd2" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#3e5cd2" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGit} color="#3e5cd2" />
                        </div>
                    </div>
                </div>
            </div >
            <Loader type='pacman' />
        </>
    )
};

export default About;
