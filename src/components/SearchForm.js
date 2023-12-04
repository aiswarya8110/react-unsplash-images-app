import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';
const SearchForm = ()=>{
    const { setSearchTerm } = useContext(AppContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const searchValue = e.target.elements[0].value;
        if(!searchValue) return;
        setSearchTerm(searchValue);
    }
    return (
        <section>
            <h1 className="title">Unsplash images</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="cat" className="form-input search-input" name="search" />
                <button type="submit" className="btn" >Search</button>
            </form>
        </section>
    )
}

export default SearchForm;