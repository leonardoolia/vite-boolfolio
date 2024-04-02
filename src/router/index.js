import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../components/pages/HomePage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';
import ProjectDetailPage from '../components/pages/ProjectDetailPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage, name: 'home'},
        {path:'/projects/:slug', component: ProjectDetailPage, name: 'project-detail'},
        {path: '/contact-us', component: ContactUsPage, name: 'contact-us'},
        {path: '/not-found', component: NotFoundPage, name: 'not-found'},
        {path: '/:pathMatch(.*)*', redirect: 'not-found'},
    ]
});

export {router}