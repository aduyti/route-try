import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const style = {
        textDecoration: 'none',
        margin: '5px'
    }
    return (
        <div>
            my head
            <nav>
                <Link style={style} to="/">Home</Link>
                <Link style={style} to="about">About Us</Link>
                <Link style={style} to="contact">Contact</Link>
                <Link style={style} to="friend">Friends</Link>
            </nav>
        </div>
    );
};

export default Header;