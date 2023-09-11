'use client'

import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import InitLoader from '@/components/UI/InitLoader';
import { ShopLayout } from '@/components/layouts/ShopLayout';

export default function Home() {
    // eslint-disable-next-line no-unused-vars
    const [showComponentA, setShowComponentA] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            document.body.classList.remove('init');

            setShowComponentA(!showComponentA);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return (
        showComponentA ? (
            <InitLoader/>
        ) : (
            <ShopLayout title={'Prueba'} pageDescription={'Prueba'}>
                <Box className='center' sx={{display: 'flex', flexDirection: 'column', border: '1px solid blue'}}>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                    <Typography variant='h1'>
                        PALITOS
                    </Typography>
                </Box>
            </ShopLayout>
        )
    )
}
