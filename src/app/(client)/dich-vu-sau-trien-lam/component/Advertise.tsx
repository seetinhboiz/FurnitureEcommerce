import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import storageImage from '/public/images/service/advertise.svg';

export default function Advertise() {
    const { t } = useTranslation();

    return (
        <Grid
            container
            item
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Grid item xs={12} md={5}>
                <Image
                    src={storageImage}
                    alt=""
                    width={1}
                    height={1}
                    layout="responsive"
                    objectFit="contain"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography
                    variant="h4"
                    fontWeight={'bold'}
                    textAlign={'center'}
                    marginBottom={2}
                >
                    {t('service.advertiseTitle')}
                </Typography>
                <Typography variant="h6" textAlign={'center'}>
                    {t('service.advertiseDescription')}
                </Typography>
            </Grid>
        </Grid>
    );
}
