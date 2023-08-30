'use client'

import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import InitLoader from '@/components/UI/InitLoader';

export default function Home() {
    const [showComponentA, setShowComponentA] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowComponentA(!showComponentA);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return (
        showComponentA ? (
            <InitLoader/>
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
