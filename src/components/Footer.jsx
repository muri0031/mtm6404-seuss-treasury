import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {currentYear} Seuss Treasury. All rights reserved.</p>
                <nav className="footer-nav">
                    <Link to="/">Home</Link>
                    <Link to="/books">Books</Link>
                    <Link to="/quotes">Quotes</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;