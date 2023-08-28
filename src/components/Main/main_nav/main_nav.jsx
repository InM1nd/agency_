import React, { useRef, useEffect } from 'react';
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

// import styles from './main_nav.module.jsx'

const Main_Nav = () => {

    return(
        <div >
        <div > 
        <Suspense>
            <Outlet />
        </Suspense>
        </div>
        </div>
    )
};

export default Main_Nav


