import React, { useContext } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import AppContext from '../utils/AppContext';

const ToggleTheme = ()=>{
    const { toggleTheme, darkTheme } = useContext(AppContext);
    return (
        <section className="toggle-container">
            <button className="dark-toggle" onClick={toggleTheme} >
                {darkTheme ? <BsFillMoonFill className="toggle-icon" /> :
                 <BsFillSunFill className="toggle-icon" />
                }       
            </button>
        </section>
    )
}

export default ToggleTheme;