'use client';
import { ApiPathEnum, convertSlug } from '@/api/api.path.enum';
import Footer from '@/components/Footer';
import { Grid, ThemeProvider } from '@mui/material';
import Link from 'next/link';
import theme from '../../theme';
import Blog from './Blog';
import { useEffect, useState } from 'react';
import { IActivity } from '@/types/activities/activities.interface';
import axios from '@/api/axios.instance';
import { ApiResponse } from '@/types/utils/api-response.interface';

const ActivityComponent = () => {
    const activityTheme = theme;
    const [activities, setActivities] = useState<IActivity[]>([]);

    useEffect(() => {
        axios
            .get<ApiResponse<IActivity[]>>(ApiPathEnum.Activity)
            .then((res) => {
                if (res.status === 200) setActivities(res.data?.data ?? []);
            });
    }, []);

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
                            href={`/hoat-dong/${convertSlug(activity.name)}-${activity._id}`}
                            key={activity._id}
                        >
                            <Blog
                                directionImg={'left'}
                                data={activity}
                                key={activity._id}
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
