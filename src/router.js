import { createWebHistory, createRouter } from "vue-router";



const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./components/Mainpage.vue"),
    },
    {
        path: "/adminlogin",
        name: "adminlogin",
        component: () => import("./components/adminlogin.vue"),
    },
    {
        path: "/adminpage",
        name: "adminpage",
        component: () => import("./components/adminpage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    },
})
export default router