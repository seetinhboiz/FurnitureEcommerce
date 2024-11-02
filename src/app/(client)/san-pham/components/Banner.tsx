import { Grid, ThemeProvider } from '@mui/material';
import theme from '../../theme';
import Banner from '../../trang-chu/component/Banner';
export default function ProductBanner() {
    return (
        <ThemeProvider theme={theme}>
            <Grid sx={{ position: 'relative' }}>
                <Banner bannerName="productBanner" />
            </Grid>
        </ThemeProvider>
    );
}
