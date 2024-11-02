import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import loudspeaker from '/public/images/service/loudspeaker.svg';
import person from '/public/images/service/person.svg';
import support from '/public/images/service/support.svg';

export default function ServiceInformationItem() {
    const { t } = useTranslation();

    return (
        <Grid
            xs={12}
            item
            container
            display={'flex'}
            justifyContent={'space-between'}
        >
            <Grid
                container
                item
                xs={12}
                md={3}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                marginTop={2}
            >
                <Image src={person} alt="" height={100} width={100} />
                <Typography
                    variant="h6"
                    fontWeight={'bold'}
                    textAlign={'center'}
                    marginY={1}
                >
                    {t('service.serviceInfomationTitle_1')}
                </Typography>
                <Typography variant="h6" textAlign={'center'}>
                    {t('service.serviceInfomationDescription_1')}
                </Typography>
            </Grid>

            <Grid
                container
                item
                xs={12}
                md={3}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                marginTop={2}
            >
                <Image src={support} alt="" height={100} width={100} />
                <Typography
                    variant="h6"
                    fontWeight={'bold'}
                    textAlign={'center'}
                    marginY={1}
                >
                    {t('service.serviceInfomationTitle_2')}
                </Typography>
                <Typography variant="h6" textAlign={'center'}>
                    {t('service.serviceInfomationDescription_2')}
                </Typography>
            </Grid>

            <Grid
                container
                item
                xs={12}
                md={3}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                marginTop={2}
            >
                <Image src={loudspeaker} alt="" height={100} width={100} />
                <Typography
                    variant="h6"
                    fontWeight={'bold'}
                    textAlign={'center'}
                    marginY={1}
                >
                    {t('service.serviceInfomationTitle_3')}
                </Typography>
                <Typography variant="h6" textAlign={'center'}>
                    {t('service.serviceInfomationDescription_3')}
                </Typography>
            </Grid>
        </Grid>
    );
}
