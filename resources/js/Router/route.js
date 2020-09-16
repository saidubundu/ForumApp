import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Login = () => import("../components/Auth/Login");
const Forum = () => import("../components/forum/Forum");
const Signup = () => import("../components/Auth/Signup");
const CreateQuestion = () => import("../components/forum/CreateQuestion")
import Logout from "../components/Auth/Logout";
const ReadQuestion = () => import("../components/forum/ReadQuestion");
import Category from "../components/category/Category";
import Setting from "../components/user/Setting";
import parallex from "../components/parallex";
const AboutComponent = () => import("../components/AboutComponent");
const AdminDashboard = () => import("../components/Admin/AdminDashboard")

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
    {path: '/about', component: AboutComponent},

    {path: '/addash', component: AdminDashboard, name: 'admin'}



]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang : false,
    mode : 'history'
})

export default router
