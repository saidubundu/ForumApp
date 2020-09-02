<template>

    <div>
        <br>
        <main id="tt-pageContent" class="tt-offset-none">
            <div class="container">
                <div class="tt-loginpages-wrapper">
                    <div class="tt-loginpages">
                        <router-link to="/"  class="tt-block-title">

                            <img src="images/logo.png" alt="">
                            <div class="tt-title">
                                Welcome to Selp Forum
                            </div>
                            <div class="tt-description">
                                Join the forum to unlock true power of community.
                            </div>

                        </router-link>
                        <form class="form-default" @submit.prevent="signup">
                            <div class="form-group">
                                <label for="loginUserName">Username</label>
                                <input type="text" v-model="form.name" name="name" class="form-control" id="loginUserName" placeholder="azyrusmax">
                            </div>
                            <div class="form-group">
                                <label for="loginUserEmail">Email</label>
                                <input type="text" v-model="form.email" name="name" class="form-control" id="loginUserEmail" placeholder="Sample@sample.com">
                            </div>
                            <div class="form-group">
                                <label for="loginUserPassword">Password</label>
                                <input type="password" v-model="form.password" name="name" class="form-control" id="loginUserPassword" placeholder="************">
                            </div>

                            <div class="form-group">
                                <label for="loginUserPasswordConfirmation">Confirm Password</label>
                                <input type="password" v-model="form.password_confirmation" name="name" class="form-control" id="loginUserPasswordConfirmation" placeholder="************">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-secondary btn-block">Create my account</button>
                            </div>
                            <p>Already have an account? <router-link to="/login">Login here</router-link></p>
                            <div class="tt-notes">
                                By signing up, signing in or continuing, I agree to
                                Selp Forum’s <a href="#" class="tt-underline">Terms of Use</a> and <a href="#" class="tt-underline">Privacy Policy.</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Signup",
        data(){
            return{
                form:{
                    name:null,
                    email:null,
                    password:null,
                    password_confirmation:null
                }
            }
        },

        methods:{
            signup(){
                axios.post('/api/auth/signup', this.form)
                .then(res => {
                    User.responseAfterLogin(res)
                    this.$router.push({name: 'forum'})
                })
                .catch(error => this.errors = error.response.data.errors)
            }
        }
    }
</script>

<style scoped>

</style>
