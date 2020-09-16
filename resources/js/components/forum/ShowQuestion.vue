<template>
    <div class="tt-single-topic">
        <div class="tt-item-header">
            <div class="tt-item-info info-top">
                <div class="tt-avatar-icon">
                    <i class="tt-icon">
                        <svg>
                            <use :xlink:href="classes"></use>
                        </svg>
                    </i>
                </div>
                <div class="tt-avatar-title">
                    <a href="#">{{data.user}}</a>
                </div>
                <a href="#" class="tt-info-time">
                    <i class="tt-icon">
                        <svg>
                            <use xlink:href="#icon-time"></use>
                        </svg>
                    </i>{{data.created}}
                </a>
            </div>
            <h3 class="tt-item-title">
                <a href="#">{{data.title}}</a>
            </h3>
            <div class="tt-item-tag">
                <ul class="tt-list-badge">
                    <li><a href="#"><span class="tt-color03 tt-badge">exchange</span></a></li>
                    <li><a href="#"><span class="tt-badge">themeforest</span></a></li>
                    <li><a href="#"><span class="tt-badge">elements</span></a></li>
                </ul>
            </div>
        </div>
        <div class="tt-item-description">

            <p v-html="body"></p>

        </div>
        <div class="tt-item-info info-bottom">
            <a href="#" class="tt-icon-btn">
                <i class="tt-icon">
                    <svg>
                        <use xlink:href="#icon-like"></use>
                    </svg>
                </i>
                <span class="tt-text">671</span>
            </a>
            <a href="#" class="tt-icon-btn">
                <i class="tt-icon">
                    <svg>
                        <use xlink:href="#icon-dislike"></use>
                    </svg>
                </i>
                <span class="tt-text">39</span>
            </a>
            <a href="#" class="tt-icon-btn">
                <i class="tt-icon">
                    <svg>
                        <use xlink:href="#icon-favorite"></use>
                    </svg>
                </i>
                <span class="tt-text">12</span>
            </a>
            <div class="col-separator"></div>
            <div v-if="own">
                <b-icon id="edit" @click="edit" v-b-tooltip.hover target="Create" icon="pencil-square" variant="info"
                        font-scale="1.5">
                </b-icon>
                <b-tooltip target="edit" title="Edit question"></b-tooltip>
                <b-icon id="delete" @click="destroy" icon="trash-fill" style="color: #EF5350" font-scale="1.5"></b-icon>
                <b-tooltip target="delete" variant="danger" title="Delete question"></b-tooltip>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data'],
        name: "ShowQuestion",

        data() {
            return {
                own: User.own(this.data.user_id),
                replyCount: this.data.reply_count
            }
        },

        computed: {
            classes() {
                return '#icon-ava-' + this.data.user[0].toLowerCase()
            },
            body() {
                return this.data.body
            }
        },

        created() {
            EventBus.$on('createReply', () => {
                this.replyCount++
            });

            Echo.private('App.User.' + User.id())
                .notification((notification) => {
                    this.replyCount++
                });

            EventBus.$on('deleteReply', () => {
                this.replyCount--
            });

            Echo.channel('deleteReplyChannel')
                .listen('DeleteReplyEvent', (e) => {
                    this.replyCount--
                })
        },

        methods: {
            handleHover(hovered) {
                this.isHovered = hovered
            },

            destroy() {
                this.$toast.question('Are you sure about that?', "Confirm", {
                    timeout: 20000,
                    close: false,
                    overlay: true,
                    displayMode: 'once',
                    id: 'question',
                    zindex: 999,
                    title: 'Hey',
                    position: 'center',
                    buttons: [
                        ['<button><b>YES</b></button>', (instance, toast) => {
                            axios.delete(`/api/question/${this.data.slug}`)
                                .then(res => {
                                    this.$router.push('/forum')
                                    $(this.$el).fadeOut(500, () => {
                                        this.$toast.success("Question deleted", "Success", {timeout: 3000});
                                    })
                                })
                                .catch(error => console.log(error.response.data))

                            instance.hide({transitionOut: 'fadeOut'}, toast, 'button');

                        }, true],
                        ['<button>NO</button>', function (instance, toast) {

                            instance.hide({transitionOut: 'fadeOut'}, toast, 'button');

                        }],
                    ],
                });

            },
            edit() {
                EventBus.$emit('startEditing')
            }
        }
    }
</script>

<style scoped>

</style>
