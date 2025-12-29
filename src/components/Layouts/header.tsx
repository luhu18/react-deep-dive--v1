 import React, { useState } from "react"
 

 interface HeaderProps {
     isDarkMode: boolean;
     onToggleTheme: () => void;
 }

 const Header: React.FC<HeaderProps> = ({isDarkMode, onToggleTheme}) => {

     
    return (
        <>
        <header className="hero-sec-container">
          <div className="header-content">
            <div className="app-title"><h1>TODO</h1></div>
            <button className="theme-toggle" aria-label="Theme " onClick={onToggleTheme}>
              <img src={ isDarkMode ? '/assets/icon-sun.svg': '/assets/icon-moon.svg'}
               alt={isDarkMode ?"moon" : 'sun'} />
            </button>
          </div>
        </header>
        </>
    )
 }

 export default Header
