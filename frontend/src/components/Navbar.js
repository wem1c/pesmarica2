import React from 'react';
import '../styles/Navbar.css';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { useRef} from 'react';


const Navbar = () => {

  const ref = useRef(null);

  const handleClick = (event) => {

      ref.current.classList.toggle('open');
    //  const isOpen=ref.current.classList.contains('open');
     
  };

  return (
        <div>
        <header>
            <div className="navbar">
                
                <div className="logo">
                <button id="logo" >GUITARISTS</button>
                <SearchBar placeholder="Enter a Song Name..." />
                </div>
                
                
                <ul className="links">
                <li><a href="/">Home</a></li>
                <li><a href="/author">Authors</a></li>
                <li><a href="/browse">Browse Songs</a></li>
                <li><a href="contact">Contact</a></li>
                </ul>
                <a href="#" className="action-btn">Login</a>
                <div onClick={handleClick} className="toggle-btn">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>

            <div ref={ref} className="dropdown-menu">
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="services">Services</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="#" className="action-btn">Login</a></li>
            </div>
        </header>

    </div>
  )
}

export default Navbar