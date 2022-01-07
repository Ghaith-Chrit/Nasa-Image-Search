import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Result from './pages/result/Result';
import Main from './pages/main/Main';
import './index.css';
import { DataContextProvider } from './context/DataContext';
import Fav from './pages/fav/Fav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const rootElement = document.getElementById('root');
render(
    <>
        <ToastContainer closeButton={false}/>
        <div className='App' >
            <DataContextProvider>
                <BrowserRouter >
                    <Routes path='/'>
                        <Route path='result' element={< Result />} />
                        <Route path='fav' element={< Fav />} />
                        <Route path='*' element={< Main />} />
                    </Routes>
                </BrowserRouter>
            </DataContextProvider>
        </div>
    </>,
    rootElement
);