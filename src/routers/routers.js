import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@/pages/HomePage/_homepage'))
    },
    {
        path: '/blog',
        component: lazy(() => import('@/pages/Blog/Blog'))
    }
];

export default routers;
