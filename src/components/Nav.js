import Account from './Account';
import classNamees from '../styles/Nav.module.css';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className={classNamees.nav}>
            <ul>
                <li>
                    <Link to="/" className={classNamees.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Quiz of Knowledge Game</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </nav>
    );
}