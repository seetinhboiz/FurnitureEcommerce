import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import { CSSProperties } from 'react';
import theme from '../../theme';

const PotentialProductBox = ({ direction }: { direction: string }) => {
    const fontStyle: CSSProperties = {
        fontFamily: 'Inter',
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        textAlign: 'center',
    };

    if (direction === 'right')
        return (
            <Grid
                container
                padding={3}
                spacing={2}
                my={3}
                borderColor={theme.palette.primary.main}
                border={1}
            >
                <Grid item xs={4} overflow={'hidden'}>
                    <Box
                        component={'img'}
                        border={0}
                        minWidth={300}
                        minHeight={300}
                        sx={{ backgroundColor: '#fafafa' }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Stack position={'relative'}>
                        <Typography
                            sx={{ ...fontStyle, fontSize: '20px', mb: 2 }}
                        >
                            TÊN SẢN PHẨM
                        </Typography>
                        <Divider
                            sx={{ borderColor: theme.palette.primary.main }}
                        />
                    </Stack>
                    <Typography sx={{ ...fontStyle, marginTop: 8 }}>
                        Mô tả
                    </Typography>
                </Grid>
            </Grid>
        );
    else
        return (
            <Grid
                container
                padding={3}
                spacing={2}
                my={3}
                border={1}
                borderColor={theme.palette.primary.main}
            >
                <Grid item xs={8}>
                    <Stack position={'relative'}>
                        <Typography
                            sx={{ ...fontStyle, fontSize: '20px', mb: 2 }}
                        >
                            TÊN SẢN PHẨM
                        </Typography>
                        <Divider
                            sx={{ borderColor: theme.palette.primary.main }}
                        />
                    </Stack>
                    <Typography sx={{ ...fontStyle, marginTop: 8 }}>
                        Mô tả
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={4}
                    overflow={'hidden'}
                    container
                    justifyContent={'flex-end'}
                >
                    <Box
                        component={'img'}
                        border={0}
                        minWidth={300}
                        minHeight={300}
                        sx={{ backgroundColor: '#fafafa' }}
                    />
                </Grid>
            </Grid>
        );
};

export default PotentialProductBox;
