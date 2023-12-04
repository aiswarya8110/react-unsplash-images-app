import React, { useState, useEffect } from 'react';
import ToggleTheme from './components/ToggleTheme';
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';
import AppContext from './utils/AppContext';

const getInitialDarkTheme = ()=>{
   const isDarkMode = matchMedia("(prefers-color-scheme: dark)").matches;

   const storedDarkTheme = localStorage.getItem("darkTheme") === "true";

   return isDarkMode || storedDarkTheme;
}

const App = ()=>{
    const [darkTheme, setDarkTheme ] = useState(getInitialDarkTheme());
    const [ searchTerm, setSearchTerm ] = useState("cat");

    useEffect(()=>{
        if(darkTheme){
            document.body.classList.add("dark-theme");
        }
    },[]);

    const toggleTheme = ()=>{
        setDarkTheme(!darkTheme);
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("darkTheme", !darkTheme);
    }

    return (
        <AppContext.Provider value={{darkTheme, toggleTheme, setSearchTerm, searchTerm}}>
            <ToggleTheme />
            <SearchForm />
            <Gallery />
        </AppContext.Provider>
    )
}

export default App;