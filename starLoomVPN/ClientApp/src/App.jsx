import React from 'react';
import MainRouter from './MainRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return <>
        <ToastContainer
            position='top-right'
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
        />
        <MainRouter />
    </>
}

export default App;