<template>
    <div class="tt-item tt-wrapper-success">
        <div class="tt-single-topic">
        <div class="tt-item-header pt-noborder">
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
<!--                    <b-badge class="tt-color13 tt-badge">best answer</b-badge>-->
                    <span v-if="marked" class="tt-color13 tt-badge">best answer</span>
                </div>
                <a href="#" class="tt-info-time">
                    <i class="tt-icon">
                        <svg>
                            <use xlink:href="#icon-time"></use>
                        </svg>
                    </i>{{data.created}}
                </a>
            </div>
        </div>
        <div :reply="data" v-if="editing" class="tt-item-description">
            <edit-reply :reply="data"></edit-reply>
        </div>
        <div v-else class="tt-item-description" v-html="body">

        </div>
        <div class="tt-item-info info-bottom">
            <mark-as-best v-if="questionOwner" :content="data"></mark-as-best>
           <like :content="data"></like>
            <div class="col-separator"></div>
            <div v-if="!editing">
                <div v-if="own">
                    <b-icon @click="edit" id="edit-reply" icon="pencil-square" variant="info" font-scale="1.5"></b-icon>
                    <b-tooltip target="edit-reply" title="Edit reply"></b-tooltip>
                    <b-icon @click="destroy" id="delete-reply" icon="trash-fill" style="color: #EF5350" font-scale="1.5"></b-icon>
                    <b-tooltip target="delete-reply" variant="danger" title="Delete reply"></b-tooltip>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import EditReply from "./EditReply";
    import Like from "../votes/Like";
    import MarkAsBest from "../votes/MarkAsBest";

    export default {
        name: "Reply",
        components: {MarkAsBest, Like, EditReply},
        props: ['data', 'index'],
        data() {
            return {
                editing: false,
                beforeEditReplyBody: '',
                marked: this.data.best_reply === this.data.id
            }
        },

        computed: {
            classes() {
                return '#icon-ava-' + this.data.user[0].toLowerCase()
            },

            own() {
                return User.own(this.data.user_id)
            },

            questionOwner(){
                return User.own(this.data.question_user)
            },

            body(){
                return this.data.reply
            }
        },

        created() {
            this.listen()

            Echo.channel('BestReplyChannel')
                .listen('BestReplyEvent', (e) =>{
                    if(this.data.id === e.id){
                        e.type === 1 ? this.marked : ''
                    }
                })
        },

        methods: {
            destroy() {
                EventBus.$emit('deleteReply', this.index)
            },
            edit() {
                this.editing = true
                this.beforeEditReplyBody = this.data.reply
            },

            listen() {
                EventBus.$on('cancelEditing', (reply) => {
                    this.editing = false
                    if (reply !== this.data.reply) {
                        this.data.reply = this.beforeEditReplyBody
                        this.beforeEditReplyBody = ''
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
