import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../Views/HomeView.vue'
import AboutView from '../Views/AboutView.vue'
import EducationView from '../Views/EducationView.vue'
import SkillsView from "../Views/SkillsView.vue"
import ContactView from "../Views/ContactView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name: 'home', component: HomeView},
        {path: '/about', name: 'about', component: AboutView},
        {path: '/skills', name: 'skills', component: SkillsView},
        {path: '/contact', name: 'contact', component: ContactView},
        {path: '/Education', name: 'education', component: EducationView},
    ],
    scrollBehavior: () => ({ top: 0}),
})

export default router