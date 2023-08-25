'use client'

import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Image from 'next/image'

export default function Home() {
    const [showComponentA, setShowComponentA] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowComponentA(!showComponentA);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        showComponentA ? (
            <div className="container">
                <div className='clip-pathD'>
                    <Image
                        className='background-image'
                        src="/fondo.jpg"
                        priority
                        layout="fill"
                        alt="Luxed stones"
                        />
                </div>
                <div className='clip-path'>
                    <Image
                        className='background-image'
                        src="/fondo.jpg"
                        priority
                        layout="fill"
                        alt="Luxed stones"
                        />
                </div>
                <div className='clip-pathI'>
                    <Image
                        className='background-image'
                        src="/fondo.jpg"
                        priority
                        layout="fill"
                        alt="Luxed stones"
                        />
                </div>
            </div>
        ) : (
            <div className="container2 autoFadeIn">
                <div className='center'>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                </div>
            </div>
        )
    )
}
