import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='bg-orange-500 h-20'>
                <div className='container mx-auto text-white flex justify-between items-center h-full px-5 md:py-0'>
                    <div>
                        <h1 className="text-4xl font-semibold">Quiz Booster</h1>
                    </div>
                    <div className='links text-xl'>
                        <Link to="/">Topics</Link>
                        <Link to="/statistics">Statistics</Link>
                        <Link to="/blog">Blog</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;