import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="py-5 bg-blue-300 ">
            <ul className="text-center">
                <Link to="/"><li className="text-2xl inline-block border-b-4 cursor-pointer px-20 pb-3">MEALS</li></Link>
            </ul>
        </div>
    );
};

export default Header;