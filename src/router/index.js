import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../components/pages/HomePage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage, name: 'home'},
        {path: '/contact-us', component: ContactUsPage, name: 'contact-us'},
        {path: '/:pathMatch(.*)*', component: NotFoundPage},
    ]
});

export {router}