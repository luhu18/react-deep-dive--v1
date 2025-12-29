import React, { useEffect, useState } from "react";
import Header from "../src/components/Layouts/header";
import './styles/Header.css'
import Footer from "../src/components/Layouts/Footer";
import TodoApp from '../src/components/Todo/TodoApp'


const App = () => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(()=> {
        const saved = localStorage.getItem('data-theme');
        if(saved) return saved === 'dark'

        return matchMedia(('prefers-color-scheme: dark')).matches
    });

    useEffect(()=>{
        const theme = isDarkMode ? 'dark': 'light';
        document.body.setAttribute('data-theme', theme)
        
        localStorage.setItem('data-theme', theme)
    },[isDarkMode])

    const toggleTheme = () => setIsDarkMode(!isDarkMode)
    
    return (
        <div className="todoAppContainer">
            <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme}/>
            <TodoApp isDarkMode={isDarkMode}/>
            <Footer />
        </div>
    )
}

export default App