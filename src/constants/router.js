export const PAGE_HOME = `/`;
export const PAGE_2 = `/page-2/`;
export const PAGE_ABOUT = `/about/`;
export const PAGE_ML = `/legal-notices/`;

export const routes = [
    {
        name: 'Home',
        path: PAGE_HOME,
    },
    {
        name: 'Page 2',
        path: PAGE_2,
    },
    {
        name: 'About',
        path: PAGE_ABOUT,
    },
    {
        name: 'Terms',
        nav: false,
        path: PAGE_ML,
    },
];
