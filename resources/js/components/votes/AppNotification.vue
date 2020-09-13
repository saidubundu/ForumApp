<template>
    <div>
        <div>
                <div style="font-size: 1.5rem;">
                    <b-icon v-b-toggle.my-sidebar icon="bell-fill" :style="color"></b-icon><b-badge variant="light">{{unreadCount}}</b-badge>
                </div>
        </div>
        <b-sidebar id="my-sidebar" title="Notifications" backdrop shadow :backdrop-varient="variant">
            <b-list-group >
                <b-list-group-item class="d-flex align-items-center" v-for="item in unread" :key="item.id">

                    <router-link :to="item.path">
                        {{item.replyBy}} replied to your question:
                         <v-list-item-title @click="readIt(item)"> {{item.question}}</v-list-item-title>
                    </router-link>
                </b-list-group-item>
            </b-list-group>
                            <!--            Read-->
            <b-list-group >
                <b-list-group-item v-for="item in read" :key="item.id" class="d-flex align-items-center">


                        <v-list-item-title > {{item.question}} </v-list-item-title>

                </b-list-group-item>
            </b-list-group>
        </b-sidebar>
    </div>
<!--    <div class="dropdown">-->

<!--        <div style="font-size: 2rem;">-->
<!--            <b-icon icon="bell-fill" class="rounded-circle bg-secondary p-2" variant="light"></b-icon>-->
<!--        </div>-->
<!--        <div class="dropdown-content">-->
<!--            <h6 class="dropdown-header">Notifications</h6>-->
<!--            <div v-for="item in unread" :key="item.id">-->
<!--                <router-link :to="item.path">-->
<!--                    <v-list-item-title @click="readIt(item)">{{item.question}}</v-list-item-title>-->
<!--                </router-link>-->
<!--            </div>-->
<!--            <div class="dropdown-divider"></div>-->
<!--            <div v-for="item in read" :key="item.id">-->
<!--               <p> <v-list-item-title>{{item.question}}</v-list-item-title></p>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
    import Exception from "../../Helpers/Exception";

    export default {
        name: "AppNotification",
        data() {
            return {
                read: {},
                unread: {},
                unreadCount: 0,
                variant: 'dark',
                sound: "http://soundbible.com/mp3/Air%20Plane%20Ding-SoundBible.com-496729130.mp3"
            }
        },

        computed:{
            color(){

                return this.unreadCount > 0 ? 'color: #F44336;' : 'color: #FFCDD2';
            }
        },
        created() {
            if (User.loggedIn()) {
                this.getNotifications()
            }

            Echo.private('App.User.' + User.id())
                .notification((notification) => {
                    this.playSound()
                    this.unread.unshift(notification)
                    this.unreadCount++
                });
        },

        methods: {
            getNotifications() {
                axios.post('/api/notifications')
                    .then(res => {
                        this.read = res.data.read
                        this.unread = res.data.unread
                        this.unreadCount = res.data.unread.length
                    })
                .catch(error => Exception.handle(error))
            },

            readIt(notification) {
                axios.post("/api/markAsRead", {id: notification.id}).then(res => {
                    this.unread.splice(notification, 1);
                    this.read.push(notification);
                    this.unreadCount--;
                });
            },
            playSound(){
                let alert = new Audio(this.sound)
                alert.play()
            }
        }
    }
</script>

<style scoped>

</style>
