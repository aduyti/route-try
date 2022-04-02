import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({
        path: resolved.pathname,
        end: true
    });
    const style = {
        textDecoration: 'none',
        margin: '5px 15px',
        color: 'gray'
    };
    const styleMatch = {
        textDecoration: 'none',
        margin: '5px 15px',
        color: 'blue',
        fontWeight: 'bold'
    };

    return (
        <Link
            to={to}
            style={match ? styleMatch : style}
        >
            {children}
        </Link>
    );
};

export default CustomLink;