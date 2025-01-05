import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={3000} 
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
            />
            {/* Navbar */}
            <nav className="py-6">
                <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;