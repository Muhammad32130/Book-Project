import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg';
import { Link } from "react-router-dom";

const Nav = ({numberofItems}) => {
    function openMenu(){
        document.body.classList += " menu--open"
    }
    function closeMenu(){
        document.body.classList.remove("menu--open")
    }

    return (
        <nav>
            <div className="nav__container">
                <Link to="Book-Project/">
                <img src={LibraryLogo} className='logo' alt="" />
                </Link>
                <ul className='nav__links'>
                <li className="nav__list">
            <Link to="Book-Project/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
          <Link to="Book-Project/books" className="nav__link nav__link--primary">
              Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <Link to="Book-Project/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {numberofItems > 0 && (
              <span className="cart__length">{numberofItems}</span>
            )}         
          </li>
                </ul>
                <div className="menu__backdrop">
                    <button className='btn__menu btn__menu--close' onClick={closeMenu} >
                    <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link className="menu__link" to="Book-Project/">Home</Link>
                        </li>
                        <li className="menu__list">
                            <Link className="menu__link" to="Book-Project/books">Books</Link>
                        </li>
                        <li className="menu__list">
                            <Link className="menu__link" to="Book-Project/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
