import { Box, Grid, Stack, Typography } from '@mui/material';
import { CSSProperties } from 'react';
import theme from '../../theme';

const RightLine = () => {
  return (
    <svg
      width='743'
      height='276'
      viewBox='0 0 743 276'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ position: 'absolute' }}
    >
      <path d='M0 57H696.501' stroke='#401D59' stroke-width='3' />
      <path d='M59 71H742.012' stroke='#340B42' stroke-width='2' />
      <path d='M106 263.004V28.9959' stroke='#340B42' stroke-width='2' />
      <line
        x1='92.5'
        y1='275.032'
        x2='93.5'
        y2='0.994525'
        stroke='#401D59'
        stroke-width='3'
      />
    </svg>
  );
};

const LeftLine = () => {
  return (
    <svg
      width='728'
      height='276'
      viewBox='0 0 728 276'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ position: 'absolute', top: '10px' }}
    >
      <path d='M0 29H696.501' stroke='#401D59' stroke-width='3' />
      <path d='M44 42H727.012' stroke='#340B42' stroke-width='2' />
      <path d='M610 249.009V15' stroke='#340B42' stroke-width='2' />
      <line
        x1='623.5'
        y1='275.032'
        x2='624.5'
        y2='0.994525'
        stroke='#401D59'
        stroke-width='3'
      />
    </svg>
  );
};

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
            <Typography sx={{ ...fontStyle, fontSize: '20px' }}>
              TÊN SẢN PHẨM
            </Typography>
            <RightLine />
          </Stack>

          <Typography sx={{ ...fontStyle, marginTop: 8 }}>Mô tả</Typography>
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
            <Typography sx={{ ...fontStyle, fontSize: '20px' }}>
              TÊN SẢN PHẨM
            </Typography>
            <RightLine />
          </Stack>
          <Typography sx={{ ...fontStyle, marginTop: 8 }}>Mô tả</Typography>
        </Grid>
        <Grid item xs={4} overflow={'hidden'}>
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
