import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import { addToFav, getFav } from '../../coreFunctions/LocalStorage';
import './Fav.css';

function Fav() {

    const [favs, setFavs] = useState([]);
    const { dispatch } = useContext(DataContext);
    const navigate = useNavigate();

    useEffect(() => {
        const result = getFav();
        if (!result) return;
        setFavs(result);
    }, [])

    const showData = (index) => {
        const result = favs[index];
        dispatch(result);
        navigate('/result');
    }

    const deleteData = (index) => {
        const newFavs = favs.filter((_, i) => i !== index);
        setFavs(newFavs);
        addToFav(newFavs);
    }

    return (
        <article className='fav'>
            <article className='favItem'>
                <h1 className='favTitle'>Title (Click to view more details)</h1>
                <h1 className='favDelete'>Delete</h1>
            </article>
            {
                favs.map((content, index) => {
                    return (
                        <article key={index + Date.now()} className='favItem'>
                            <h1 key={index + 2 * Date.now()} className='favTitle' onClick={() => showData(index)} aria-describedby='Click to view more details'>{content.data[0].title}</h1>
                            <h1 key={index + 3 * Date.now()} className='favDelete' onClick={() => deleteData(index)} aria-describedby='Click to remove from favourites'>
                                <span className='icon' aria-hidden>X</span>
                            </h1>
                        </article>
                    )
                })
            }
            <button className='backBTN middle' aria-details='New Search' onClick={() => navigate('/')} />
        </article>
    );
}

export default Fav;