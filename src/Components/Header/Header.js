import React from 'react';
import CustomLink from './CustomLink';

const Header = () => {
    return (
        <div>
            my head
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="about">About Us</CustomLink>
                <CustomLink to="contact">Contact</CustomLink>
                <CustomLink to="friend">Friends</CustomLink>
            </nav>
        </div>
    );
};

export default Header;