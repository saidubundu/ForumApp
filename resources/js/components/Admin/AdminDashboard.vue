<template>
    <main id="tt-pageContent" class="tt-offset-small">
        <div class="tt-wrapper-section">
            <div class="container">
                <div class="tt-user-header">
                    <div class="tt-col-title">
                        <div class="tt-title">
                            <a href="#">Admin Dashboard</a>
                        </div>
                    </div>
                    <div class="tt-col-btn" id="js-settings-btn">
                        <div class="tt-list-btn">
                            <a href="#" class="tt-btn-icon">
                                <svg class="tt-icon">
                                    <use xlink:href="#icon-settings_fill"></use>
                                </svg>
                            </a>
                            <a href="#" class="btn btn-primary">Message</a>
                            <a href="#" class="btn btn-secondary">Follow</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="tt-tab-wrapper">
                <div class="tt-wrapper-inner">
                    <ul class="nav nav-tabs pt-tabs-default" role="tablist">
                        <li class="nav-item show">
                            <a class="nav-link active" data-toggle="tab" href="#tt-tab-01" role="tab"><span>All Users</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tt-tab-02" role="tab"><span>All Categories</span></a>
                        </li>
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" data-toggle="tab" href="#tt-tab-03" role="tab"><span>Replies</span></a>-->
<!--                        </li>-->
<!--                        <li class="nav-item tt-hide-xs">-->
<!--                            <a class="nav-link" data-toggle="tab" href="#tt-tab-04" role="tab"><span>526 Followers</span></a>-->
<!--                        </li>-->
<!--                        <li class="nav-item tt-hide-md">-->
<!--                            <a class="nav-link" data-toggle="tab" href="#tt-tab-05" role="tab"><span>489 Following</span></a>-->
<!--                        </li>-->
<!--                        <li class="nav-item tt-hide-md">-->
<!--                            <a class="nav-link" data-toggle="tab" href="#tt-tab-06" role="tab"><span>Categories</span></a>-->
<!--                        </li>-->
                    </ul>
                </div>
                <div class="tab-content">
                    <div class="tab-pane tt-indent-none  show active" id="tt-tab-01" role="tabpanel">
                        <div class="tt-topic-list">
                            <div class="tt-list-header">
                                <div class="tt-col-topic">Name</div>
                                <div class="tt-col-value-large hide-mobile">Email</div>
                                <div class="tt-col-value-large hide-mobile">Created</div>
                            </div>
                            <users v-if="users" v-for="user in users" :key="user" :data="user"></users>
                        </div>
                    </div>
                    <div class="tab-pane tt-indent-none" id="tt-tab-02" role="tabpanel">
                        <div class="tt-topic-list">
                            <div class="tt-list-header">
                                <div class="tt-col-topic">Name</div>
                                <div class="tt-col-category">Edit</div>
                                <div class="tt-col-value hide-mobile">Delete</div>
                            </div>
                            <backend-category></backend-category>
                            <div class="tt-row-btn">
                                <button type="button" class="btn-icon js-topiclist-showmore">
                                    <svg class="tt-icon">
                                        <use xlink:href="#icon-load_lore_icon"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import Users from "./Users";
    import BackendCategory from "./BackendCategory";
    export default {
        name: "AdminDashboard",
        components: {BackendCategory, Users},
        data(){
            return{
                users: {},

            }
        },

        created() {
            if(!User.admin()){
                this.router.push('/forum')
            }
            this.getUsers()

        },

        methods:{
            getUsers(){
                axios.get('/api/users')
                    .then(res  => this.users = res.data.data)
            }

        }
    }
</script>

<style scoped>

</style>
