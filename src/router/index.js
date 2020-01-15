import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store'
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/reg",
        name: "reg",
        component: () => import("../views/Reg.vue")
    },
    {
        path: "/article_add",
        name: "article_add",
        component: () => import("../views/ArticleAdd.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/article_update",
        name: "article_update",
        component: () => import("../views/ArticleUpdate.vue"),
        meta: {
            requiresAuth: true
        }
    }
];

const router = new VueRouter({
    routes
});

//登录验证
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.state.user) {  //未登录
            next({
                path: "/login"
            });
        } else {
            next();
        }
    } else {
        next(); // 确保一定要调用 next()
    }
});

export default router;
