import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import SearchResult from '../../components/searchResult/SearchResult';
import './Result.css';
import { addToFav, getFav } from '../../coreFunctions/LocalStorage';
import { toast } from 'react-toastify';

function Result() {

    const likeBTN = useRef();
    const navigate = useNavigate();
    const { data } = useContext(DataContext);

    useEffect(() => {
        if (!data) {
            navigate('/');
            toast.error('No such result was found!');
        }
    }, []);

    const onClick = () => {
        let result = getFav();
        if (!result || result.length === 0) {
            result = [data];
            likeBTN.current.classList.add('likedBTN')
        } else if (result.some(content => content.data[0].nasa_isd !== data.data[0].nasa_isd)) {
            result.push(data);
            likeBTN.current.classList.add('likedBTN')
        } else {
            result = result.filter(content => content.data[0].nasa_isd !== data.data[0].nasa_isd);
            likeBTN.current.classList.remove('likedBTN')
        }
        if (!addToFav(result))
            toast.error('Could not add to the favourites due to space limitation. Try deleting a favourite image.');
    }

    const initialLikeBTNClass = () => {
        const result = getFav('fav');
        if (result && result.some(content => content.data[0].nasa_isd === data.data[0].nasa_isd))
            return 'likedBTN likeBTN';
        return 'likeBTN';
    }

    return (
        <article className='result'>
            <SearchResult />
            <aside className='controlButtons'>
                <button
                    className={initialLikeBTNClass()}
                    aria-details='Like button'
                    onClick={() => onClick()}
                    ref={likeBTN}
                />
                <button
                    className='backBTN'
                    aria-details='New Search'
                    onClick={() => navigate('/')}
                />
            </aside>
        </article>
    );
}

export default Result;