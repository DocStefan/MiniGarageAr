// import React from 'react'
import { useState, useEffect } from "react";

type ResponsiveScreen = "PC" | "TABLET" | "MOBILE";


function useResponsiveDetect(): ResponsiveScreen {


    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {

        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    const isViewportTablet = width <= 1024 && width >= 500
    // const isViewportMobile = width <= 499;
    const isViewportPc = width >= 1025

    if (isViewportPc) {

        return "PC"

    } else if (isViewportTablet) {

        return "TABLET"

    } else  {

        return "MOBILE"

    }

}

export default useResponsiveDetect