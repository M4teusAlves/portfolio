'use client'

import { useState, useEffect } from "react"


export function Cursor(){

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e:any) => {
        setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);



    return(
        <div className="bg-[#122c53] h-[40rem] w-[40rem] blur-[10rem] rounded-full fixed translate-x-[-50%] translate-y-[-50%] font-mono hidden lg:block" style={{left:position.x, top:position.y, zIndex:-1}}></div>
    )
}