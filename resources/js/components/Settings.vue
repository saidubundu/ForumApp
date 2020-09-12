<template>
    <div v-if="user">
        <div class="dropdown tt-avatar-icon tt-size-md">
            <i class="dropbtn tt-icon" v-b-toggle.sidebar-right>
                <svg>
                    <use :xlink:href="classes"></use>
                </svg>
            </i>
            <b-sidebar id="sidebar-right" title="Settings" right backdrop shadow :backdrop-varient="variant">
                <template v-slot:footer="{ hide }">
                    <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
                        <router-link to="/logout">
                            <b-button size="sm">Log out</b-button>
                        </router-link>
                    </div>
                </template>
                <div class="px-3 py-2">
                        <form class="form-default">
                            <div class="tt-form-upload">
                                <div class="row no-gutter">
                                    <div class="col-auto">
                                        <div class="tt-avatar">
                                            <svg>
                                                <use :xlink:href="classes"></use>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="col-auto ml-auto">
                                        <a href="#" class="btn btn-primary">Upload Picture</a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="settingsUserName">Username</label>
                                <input type="text" name="name" class="form-control" id="settingsUserName"
                                       placeholder="azyrusmax">
                            </div>
                            <div class="form-group">
                                <label for="settingsUserEmail">Email</label>
                                <input type="text" name="name" class="form-control" id="settingsUserEmail"
                                       placeholder="Sample@sample.com">
                            </div>
                            <div class="form-group">
                                <label for="settingsUserPassword">Password</label>
                                <input type="password" name="name" class="form-control" id="settingsUserPassword"
                                       placeholder="************">
                            </div>
                            <div class="form-group">
                                <label for="settingsUserLocation">Location</label>
                                <input type="text" name="name" class="form-control" id="settingsUserLocation"
                                       placeholder="Slovakia">
                            </div>
                            <div class="form-group">
                                <label for="settingsUserWebsite">Website</label>
                                <input type="text" name="name" class="form-control" id="settingsUserWebsite"
                                       placeholder="Sample.com">
                            </div>
                            <div class="form-group">
                                <label for="settingsUserAbout">About</label>
                                <textarea name="" placeholder="Few words about you" class="form-control"
                                          id="settingsUserAbout"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="settingsUserAbout">Notify me via Email</label>
                                <div class="checkbox-group">
                                    <input type="checkbox" id="settingsCheckBox01" name="checkbox">
                                    <label for="settingsCheckBox01">
                                        <span class="check"></span>
                                        <span class="box"></span>
                                        <span class="tt-text">When someone replies to my thread</span>
                                    </label>
                                </div>
                                <div class="checkbox-group">
                                    <input type="checkbox" id="settingsCheckBox02" name="checkbox">
                                    <label for="settingsCheckBox02">
                                        <span class="check"></span>
                                        <span class="box"></span>
                                        <span class="tt-text">When someone likes my thread or reply</span>
                                    </label>
                                </div>
                                <div class="checkbox-group">
                                    <input type="checkbox" id="settingsCheckBox03" name="checkbox">
                                    <label for="settingsCheckBox03">
                                        <span class="check"></span>
                                        <span class="box"></span>
                                        <span class="tt-text">When someone mentions me</span>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <a href="#" class="btn btn-secondary">Save</a>
                            </div>
                        </form>
                    </div>
            </b-sidebar>
        </div>
    </div>
</template>


<script>
    export default {
        name: "Settings",
        data() {
            return {
                user: {},
                loggedIn: User.loggedIn(),
                variant: 'dark'
            }
        },
        created() {
            this.getUser()
            EventBus.$on('logout', () => {
                User.logout()
            })

        },

        methods: {
            getUser() {
                axios.post('/api/auth/me')
                    .then(res => this.user = res.data)
                    .catch(error => console.log(error.response.data))
            }
        },
        computed: {
            classes() {
                return '#icon-ava-' + this.user.name[0].toLowerCase()
            }
        },
    }
</script>

<style scoped>

</style>
