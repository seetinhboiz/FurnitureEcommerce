import { Box } from '@mui/material';
import Image from 'next/image';

const PurpleBackground = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#401d59',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                }}
            />
            <Box position={'fixed'} top={0} left={0} right={0} bottom={0}>
                <Image
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'left',
                        zIndex: -1,
                    }}
                    alt=""
                    src={'/images/ext-background.png'}
                    fill
                />
            </Box>
        </>
    );
};

export default PurpleBackground;
