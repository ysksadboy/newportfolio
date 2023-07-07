import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import logoS from '../../../assets/images/logo-s.png';
import LogoSubtitle from '../../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faGithub, faDashcube, faInstagram, faLinkedin, faBuffer } from "@fortawesome/free-brands-svg-icons";


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='logo2' />

        </Link>
        <nav>
            <NavLink
                exact="true"
                activeclassname='active'
                to='/'>
                <FontAwesomeIcon className='first-child' icon={faDashcube} color="4d4d4e" />
            </NavLink>

            <NavLink
                exact="true"
                activeclassname='active'
                className="about-link"
                to='/about'
            >
                <FontAwesomeIcon icon={faBuffer} color="4d4d4e" />
            </NavLink>

            <NavLink
                exact="true"
                activeclassname='active'
                className="contact-link"
                to='/contact'
            >
                <FontAwesomeIcon icon={faFacebookMessenger} color="4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/andrew-wilkinson-9450b9277/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/ysksadboy'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.instagram.com/ysksadboy/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar;