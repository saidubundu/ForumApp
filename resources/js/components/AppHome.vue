<template>
<div>
    <tool-bar></tool-bar>

          <transition name="fade">
    <router-view></router-view>
          </transition>
            <router-link v-if="loggedIn" class="tt-btn-create-topic" to="/create">
        <span class="tt-icon">
        <svg>
          <use xlink:href="#icon-create_new"></use>
        </svg>
    </span>
    </router-link>

</div>
</template>

<script>
    export default {
        name: "AppHome",
        data(){
            return{
                loggedIn: User.loggedIn(),
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
