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
                        <div class="tt-search">
                            <!-- toggle -->
                            <button class="tt-search-toggle" data-toggle="modal" data-target="#modalAdvancedSearch">
                                <svg class="tt-icon">
                                    <use xlink:href="#icon-search"></use>
                                </svg>
                            </button>
                            <!-- /toggle -->
                            <form class="search-wrapper">
                                <div class="search-form">
                                    <input type="text" class="tt-search__input" placeholder="Search">
                                    <button class="tt-search__btn" type="submit">
                                        <svg class="tt-icon">
                                            <use xlink:href="#icon-search"></use>
                                        </svg>
                                    </button>
                                    <button class="tt-search__close">
                                        <svg class="tt-icon">
                                            <use xlink:href="#cancel"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div class="search-results">
                                    <div class="tt-search-scroll">
                                        <ul>
                                            <li>
                                                <a href="page-single-topic.html">
                                                    <h6 class="tt-title">Rdr2 secret easter eggs</h6>
                                                    <div class="tt-description">
                                                        Here’s what I’ve found in Red Dead Redem..
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="page-single-topic.html">
                                                    <h6 class="tt-title">Top 10 easter eggs in Red Dead Rede..</h6>
                                                    <div class="tt-description">
                                                        You can find these easter eggs in Red Dea..
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="page-single-topic.html">
                                                    <h6 class="tt-title">Red Dead Redemtion: Arthur Morgan..</h6>
                                                    <div class="tt-description">
                                                        Here’s what I’ve found in Red Dead Redem..
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="page-single-topic.html">
                                                    <h6 class="tt-title">Rdr2 secret easter eggs</h6>
                                                    <div class="tt-description">
                                                        Here’s what I’ve found in Red Dead Redem..
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="page-single-topic.html">
                                                    <h6 class="tt-title">Top 10 easter eggs in Red Dead Rede..</h6>
                                                    <div class="tt-description">
                                                        You can find these easter eggs in Red Dea..
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="page-single-topic.html">
                                                    <h6 class="tt-title">Red Dead Redemtion: Arthur Morgan..</h6>
                                                    <div class="tt-description">
                                                        Here’s what I’ve found in Red Dead Redem..
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <button type="button" class="tt-view-all" data-toggle="modal"
                                            data-target="#modalAdvancedSearch">Advanced Search
                                    </button>
                                </div>
                            </form>
                        </div>
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
    export default {
        name: "ToolBar",
        components: {Settings, AppNotification},
        data() {
            return {
                loggedIn: User.loggedIn(),
                items: [
                    {title: 'Forum', to: '/forum', show: true},
                    {title: 'Categories', to: '/category', show: true},
                    {title: 'Ask', to: '/create', show: User.loggedIn()},
                    {title: 'About', to: '/about', show: true},
                ],
            }
        }
    }
</script>

<style scoped>

</style>
