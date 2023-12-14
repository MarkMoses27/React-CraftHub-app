import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
const Header = () => {


  return (
    <div className='header'>
      <div className="logo">
        <h1>
          CraftHub <span><FontAwesomeIcon icon={faCircle} className="menicon" /></span>
        </h1>
      </div>
      <div className="nav-links">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
     
    </div>
  );
};

export default Header;
