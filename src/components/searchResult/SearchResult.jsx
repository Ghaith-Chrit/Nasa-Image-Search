import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import './SearchResult.css';

function SearchResult() {

    const { data } = useContext(DataContext);

    return (
        <>
            <div className='headerContainer'>
                <h1 className='resultHeader'>{data?.data[0].title}</h1>
                <h2 className='resultSubheader'>Nasa ID: {data?.data[0].nasa_id}</h2>
                <h2 className='resultDate'>Date: {new Date(data?.data[0].date_created).toDateString()}</h2>
            </div>
            <div className='imgContainer'>
                <img src={data?.links[0].href} alt='The picture provided by Nasa.' />
            </div>
            <p className='description'>{data?.data[0].description}</p>
        </>
    );
}

export default SearchResult;