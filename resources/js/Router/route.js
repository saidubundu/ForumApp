import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from "../components/Auth/Login";
import Forum from "../components/forum/Forum";
import Signup from "../components/Auth/Signup";
import CreateQuestion from "../components/forum/CreateQuestion";
import Logout from "../components/Auth/Logout";
import ReadQuestion from "../components/forum/ReadQuestion";
import Category from "../components/category/Category";
import Setting from "../components/user/Setting";
import parallex from "../components/parallex";
import AboutComponent from "../components/AboutComponent";

const routes = [
    {path: '/', component: parallex},
    { path: '/login', component: Login, name: 'login' },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    { path: '/forum', component: Forum, name: 'forum' },

    { path: '/create', component: CreateQuestion,
    beforeEnter:(to, form, next)=>{
        axios.get('/api/user')
            .then(() =>{next()})
            .catch(()=>{
                return next({name: 'login'})
            })
    }
    },
    //single question
    {path: '/question/:slug', component: ReadQuestion, name: 'read'},

    //categories
    {path: '/category', component: Category},
    {path: '/setting', component: Setting},
    {path: '/about', component: AboutComponent}



]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang : false,
    mode : 'history'
})

export default router
