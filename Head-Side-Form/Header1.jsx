import React from 'react';
import './Header.css';

export const Header1 = () =>{
  return (
    <header className="header">
        <div>
            <h2>MyApp</h2>
        </div>
        <div>
            <ul className='btn'>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
            </ul>
        </div>
    </header>
  );
}
