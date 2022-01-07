import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import Logo from '../../components/logo/Logo';
import Search from '../../components/search/Search';
import { DataContext } from '../../context/DataContext';
import './Main.css';

function Main() {

    const { fetching } = useContext(DataContext);
    const navigate = useNavigate();

    return (
        <>
            {fetching ?
                <Loading />
                :
                <div className='main'>
                    <Logo />
                    <Search />
                    <button className='favBTN' onClick={() => navigate('fav')}>Check Favourites</button>
                </div>
            }
        </>
    );
}

export default Main;