<template>
    <div class="tt-icon-btn" @click="likeIt">
        <b-icon icon="heart-fill" font-scale="1.5" :style="color"></b-icon>
        <span class="tt-text">{{count}}</span>
    </div>
</template>

<script>
    export default {
        name: "Like",
        props: ['content'],
        data() {
            return {
                liked: this.content.liked,
                count: this.content.like_count
            }
        },

        created() {
            Echo.channel('likeChannel')
                .listen('LikeEvent', (e) => {
                    if (this.content.id === e.id) {
                        e.type === 1 ? this.count++ : this.count--
                    }
                })
        },

        computed: {
            color() {

                return this.liked ? 'color: #F44336;' : 'color: #FFCDD2';
            },
        },

        methods: {
            likeIt() {
                if (User.loggedIn()) {
                    this.liked ? this.decr() : this.incr()
                    this.liked = !this.liked
                }
            },

            incr() {
                axios.post(`/api/like/${this.content.id}`)
                    .then(res => this.count++)
            },

            decr() {
                axios.delete(`/api/like/${this.content.id}`)
                    .then(res => this.count--)
            }
        }
    }
</script>

<style scoped>

</style>
