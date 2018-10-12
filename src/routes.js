import React from 'react';
import Loadable from 'react-loadable';

import Home from './Views/Home';

function Loading( a ) {

    // console.log( 'Load Page:', a);
    return null; //<div>Loading...</div>;
}

const About = Loadable({
    loader: () => import('./Views/About'),
    loading: Loading,
});

const WhatIsIBV = Loadable({
    loader: () => import('./Views/About/WhatIsIBV'),
    loading: Loading,
});

const Exibitor = Loadable({
    loader: () => import('./Views/Exibitor'),
    loading: Loading,
});

const ExibitorWhy = Loadable({
    loader: () => import('./Views/Exibitor/Why'),
    loading: Loading,
});

const Vistor = Loadable({
    loader: () => import('./Views/Vistor'),
    loading: Loading,
});

const Registration = Loadable({
    loader: () => import('./Views/Vistor/registration'),
    loading: Loading,
}); 

const Activities = Loadable({
    loader: () => import('./Views/Activities'),
    loading: Loading,
});

const News = Loadable({
    loader: () => import('./Views/News'),
    loading: Loading,
    delay: 2000
});

const Gallery = Loadable({
    loader: () => import('./Views/Gallery'),
    loading: Loading,
});

const Travel = Loadable({
    loader: () => import('./Views/Travel'),
    loading: Loading,
});
const Contact = Loadable({
    loader: () => import('./Views/Contact'),
    loading: Loading,
});


const routes = [
    { path: '/', exact: true, name: 'Home', key: 'home', component: Home },
    
    { path: '/about', exact: true, name: 'About us', key: 'about', component: About, items: [
        { path: '/about/IBV', exact: true, name: 'What is Inter Beauty Vietnam?', component: WhatIsIBV },
        { path: '/about', exact: true, name: 'About Organizer', component: About },
    ] },
    { path: '/about/IBV', exact: true, component: WhatIsIBV, backend: 1 },

    { path: '/exibitor', exact: true, name: 'Exibitor', key: 'exibitor', component: Exibitor, items: [
        { path: '/exibitor/information', name: 'Exibitor Profile' },
        { path: '/exibitor/why', name: 'Why Exhibit?' },
    ] },
    { path: '/exibitor/information', exact: true, component: Exibitor, backend: 1 },
    { path: '/exibitor/why', exact: true, component: ExibitorWhy, backend: 1 },

    { path: '/vistor', exact: true, name: 'Vistor', key: 'vistor', component: Vistor, items: [
        { path: '/vistor/information', name: 'Vistor Information' },
        { path: '/vistor/registration', name: 'Pre-registration' },
        // { path: '/vistor/registration', name: 'Matching Program' },
    ] },
    { path: '/vistor/information', exact: true, component: Vistor, backend: 1 },
    { path: '/vistor/registration', exact: true, component: Registration, backend: 1 },

    { path: '/activities', exact: true, name: 'Activities', key: 'activities', component: Activities },

    { path: '/news', exact: true, link:'/news', name: 'News', key: 'news', component: News },
    { path: '/news/:year/:month/:primary', link:'/news', name: 'News', component: News, backend: 1 },

    { path: '/gallery', exact: true, name: 'Photo Gallery', key: 'gallery', component: Gallery},
    { path: '/travel', exact: true, name: 'Travel and Accommodation', key: 'travel', component: Travel },

    { path: '/contact', exact: true, name: 'Contact us', key: 'contact', component: Contact },

    { path: '/', exact: true, name: 'More', key: 'more', items: [
        // { path: '/gallery', exact: true, name: 'Photo Gallery', key: 'gallery', component: Gallery },
        // { path: '/travel', exact: true, name: 'Travel and Accommodation', key: 'travel', component: Travel },
    ] },


    
];

export default routes;