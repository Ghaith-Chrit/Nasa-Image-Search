import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getImage } from '../../coreFunctions/HttpServices';
import { DataContext } from '../../context/DataContext';
import './Search.css';
import { toast } from 'react-toastify';

function Search() {

    const searchBar = useRef();
    const { dispatch } = useContext(DataContext);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if (searchBar.current.classList.contains('animateWidth')) {
            sessionStorage.setItem('animation', 'done');
            setTimeout(() => searchBar.current.classList.add('fullWidth'), 650);
        }
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        if (!searchBar.current.value) return;
        try {
            dispatch({ type: 'GET_DATA' });
            const item = await getImage(searchBar.current.value);
            dispatch({ type: 'GET_DATA_DONE', payload: item });
            navigate('result');
        } catch (err) {
            dispatch({ type: 'GET_DATA_FAILED' });
            toast.error('An unexpected error occured. Please try again later.')
        }
    }

    return (
        <>
            <form className='imageSearchForm'>
                <input
                    type='text'
                    name='term'
                    className={`${sessionStorage.getItem('animation') === 'done' ? 'fullWidth' : 'animateWidth'} termInput`}
                    aria-label="Search for an image"
                    autoFocus
                    ref={searchBar} />
                <button className='searchBTN' aria-details='Search' onClick={e => onSubmit(e)} />
            </form>
        </>
    );
}

export default Search;  