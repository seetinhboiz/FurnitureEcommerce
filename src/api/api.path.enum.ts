import slugify from 'slugify';

const prefix = 'api';

export const ApiPathEnum = {
    Product: `${prefix}/products`,
    Login: `${prefix}/auth/sign-in`,
    Category: `${prefix}/categories`,
    Files: `${prefix}/files`,
    JobAds: `${prefix}/job-ads`,
    Banner: `${prefix}/banners`,
    Contact: `${prefix}/contacts`,
    Activity: `${prefix}/activities`,
};

export const convertSlug = (str: string) => {
    if (!str) return '';
    return slugify(str, { lower: true, locale: 'vi' });
};
