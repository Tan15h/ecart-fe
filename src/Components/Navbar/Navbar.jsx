import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import wishlist1 from '../Assets/wishlist1.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const [searchQuery, setSearchQuery] = useState('');
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdownToggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className='navbar'>
            <Link to='/' onClick={() => { setMenu('shop') }} className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </Link>
            <img onClick={dropdownToggle} className='nav-dropdown' src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu('shop') }}><Link to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('mens') }}><Link to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('womens') }}><Link to="womens">Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('kids') }}><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-search">
                <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchInputChange} />
                <button>Search</button>
            </div>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
                <div className="nav-wishlist1">
                    <Link to='/wishlist1'><img src={wishlist1} alt="" /></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
