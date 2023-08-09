'use client';

import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
    const router = useRouter();

    return (
        <Box className='center' sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h2">404 Not Found</Typography>
            <Typography variant="h6">
                Oh uh.. looks like the page you&apos;re looking for doesn&apos;t exist
            </Typography>

            <Button
                onClick={() => router.push('/')}
                color="primary"
                className="py-2 px-4 mt-5"
            >
                Back Home
            </Button>
        </Box>
    );
};

export default NotFoundPage;