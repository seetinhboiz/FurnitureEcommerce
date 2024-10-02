'use client';
import { convertSlug } from '@/api/api.path.enum';
import Footer from '@/components/Footer';
import { Grid, ThemeProvider } from '@mui/material';
import Link from 'next/link';
import theme from '../../theme';
import Blog from './Blog';
import { activities } from '@/app/static';

const ActivityComponent = () => {
    const activityTheme = theme;

    return (
        <ThemeProvider theme={activityTheme}>
            <Grid
                container
                justifyContent={'center'}
                xs={12}
                alignItems={'center'}
                sx={{
                    backgroundColor: activityTheme.palette.primary.contrastText,
                }}
            >
                <Grid xs={10} item>
                    {activities.map((activity) => (
                        <Link
                            href={`/activity/${convertSlug(activity.title)}-${activity.id}`}
                            key={activity.id}
                        >
                            <Blog
                                directionImg={'left'}
                                data={activity}
                                key={activity.id}
                            />
                        </Link>
                    ))}
                </Grid>
            </Grid>
            <Footer />
        </ThemeProvider>
    );
};

export default ActivityComponent;
