import { Grid, ThemeProvider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import theme from '../../theme';
import Banner from '../../trang-chu/component/Banner';

export default function ProductBanner() {
    const { t } = useTranslation();
    return (
        <ThemeProvider theme={theme}>
            <Grid sx={{ position: 'relative' }}>
                <Banner bannerName="productBanner" />

                {/* <Grid
                    width={500}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '5%',
                        transform: 'translateY(-50%)',
                    }}
                >
                    <Typography
                        variant="h2"
                        textAlign={'center'}
                        fontWeight={"bold"}
                        lineHeight={1.4}
                        color={theme.palette.primary.contrastText}
                        sx={{ fontSize: "50px !important" }}
                    >
                        {t('product.productBanner')}
                    </Typography>
                </Grid> */}
            </Grid>
        </ThemeProvider>
    );
}
