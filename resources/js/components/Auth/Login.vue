<template>
    <main id="tt-pageContent" class="tt-offset-small">
        <div class="container">
    <div>
        <div class="tt-loginpages-wrapper">
                    <div class="tt-loginpages" >
                        <router-link to="/" class="tt-block-title">
                            <img src="images/logo.png" alt="">
                            <div class="tt-title">
                                Welcome to Selp Forum
                            </div>
                            <div class="tt-description">
                                Log into your account to unlock true power of community.
                            </div>
                        </router-link>
                        <form class="form-default" @submit.prevent="login">
                            <div class="form-group">
                                <label for="loginUserEmail">Email</label>
                                <input type="email" v-model="form.email" name="name" class="form-control" id="loginUserEmail" placeholder="example@selp.com">
                                <span v-if="error"  class="help-block" style="color: red">{{error}}</span>
                            </div>
                            <div class="form-group">
                                <label for="loginUserPassword">Password</label>
                                <input type="password" v-model="form.password" name="name" class="form-control" id="loginUserPassword" placeholder="************">

                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <div class="checkbox-group">
                                            <input type="checkbox" id="settingsCheckBox01" name="checkbox">
                                            <label for="settingsCheckBox01">
                                                <span class="check"></span>
                                                <span class="box"></span>
                                                <span class="tt-text">Remember me</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col ml-auto text-right">
                                    <a href="#" class="tt-underline">Forgot Password</a>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-secondary btn-block">Log in</button>
                            </div>
                            <p>Don’t have an account? <router-link class="tt-underline" to="/signup">Signup here</router-link></p>
                            <div class="tt-notes">
                                By Logging in, signing in or continuing, I agree to
                                selpForum’s <a href="#" class="tt-underline">Terms of Use</a> and <a href="#" class="tt-underline">Privacy Policy.</a>
                            </div>
                        </form>
                    </div>
                </div>
    </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                form:{
                    email:null,
                    password:null
                },
                errors:[]
            }
        },
        methods:{
            login(){
                User.login(this.form)
            }
        }
    }
</script>

<style scoped>

</style>
