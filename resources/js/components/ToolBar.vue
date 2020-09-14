<template>
    <div>
        <nav class="panel-menu" id="mobile-menu">
            <ul>

            </ul>
            <div class="mm-navbtn-names">
                <div class="mm-closebtn">
                    Close
                    <div class="tt-icon">
                        <svg>
                            <use xlink:href="#icon-cancel"></use>
                        </svg>
                    </div>
                </div>
                <div class="mm-backbtn">Back</div>
            </div>
        </nav>
        <header id="tt-header">
            <div class="container">
                <div class="row tt-row no-gutters">
                    <div class="col-auto">
                        <!-- toggle mobile menu -->
                        <a class="toggle-mobile-menu" href="#">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-menu_icon"></use>
                            </svg>
                        </a>
                        <!-- /toggle mobile menu -->
                        <!-- logo -->
                        <div class="tt-logo">
                            <router-link to="/">
                                <img src="images/logo.png" alt="">
                            </router-link>
                        </div>
                        <!-- /logo -->
                        <!-- desctop menu -->
                        <div class="tt-desktop-menu">
                            <nav>
                                <ul>
                                    <li>
                                        <router-link v-for="item in items" :key="item.title" :to="item.to"
                                                     v-if="item.show"><span>{{item.title}}</span></router-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <!-- /desctop menu -->
                        <!-- tt-search -->
                        <search-component></search-component>
                        <!-- /tt-search -->

                    </div>
                    <div class="col-auto ml-auto">
                        <app-notification v-if="loggedIn"></app-notification>
                    </div>
                    <div class="col-auto ml-auto">
                        <div class="tt-account-btn">
                            <router-link v-if="! loggedIn" class="btn btn-primary" to="/login">Log in</router-link>
                            <router-link v-if="! loggedIn" to="/signup" class="btn btn-secondary">Sign up</router-link>
                            <!--                                                <router-link v-if="loggedIn" to="/logout" class="btn btn-secondary">Logout</router-link>-->

                            <div v-if=" loggedIn" class="tt-user-info d-flex justify-content-center">
                               <settings></settings>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    import AppNotification from "./votes/AppNotification";
    import Settings from "./Settings";
    import SearchComponent from "./SearchComponent";
    export default {
        name: "ToolBar",
        components: {SearchComponent, Settings, AppNotification},
        data() {
            return {
                loggedIn: User.loggedIn(),
                items: [
                    {title: 'Forum', to: '/forum', show: true},
                    {title: 'Categories', to: '/category', show: true},
                    {title: 'Ask', to: '/create', show: User.loggedIn()},
                    {title: 'About', to: '/about', show: true},
                    {title: 'Admin', to: '/addash', show: User.admin()},
                ],
            }
        }
    }
</script>

<style scoped>

</style>
