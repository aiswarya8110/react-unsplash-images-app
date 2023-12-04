import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import imagesAxios from '../utils/axios';
import AppContext from '../utils/AppContext';

const Gallery = ()=>{
    const { searchTerm } = useContext(AppContext);
    const { isLoading, isError, data } = useQuery({
        queryKey: [searchTerm],
        queryFn: ()=> imagesAxios.get(searchTerm)
    })

    if(isLoading){
        return (
        <section className="image-container">
            <h4>Loading...</h4>
        </section>
        )
    }

    if(isError){
        return (
            <section className="image-container">
                <h4>Something went wrong!</h4>
            </section>
        )
    }

    if(data.data.results.length === 0){
        return (
            <section className="image-container">
                <h4>No results found</h4>
            </section>
        )
    }
    const { results } = data?.data;

    return (
        <section className="image-container">
            {results?.map((item)=>{
                const { id, urls, alt_description } = item;
                return (
                <img 
                src={urls.regular} 
                alt={alt_description} 
                key={id}
                className="img"
                />
                )
            })}
        </section>
    )
}

export default Gallery;