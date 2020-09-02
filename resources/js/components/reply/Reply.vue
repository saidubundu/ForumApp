<template>

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
        <div v-else class="tt-item-description">
            {{data.reply}}
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
            <div v-if="!editing">
                <div v-if="own">
                    <button @click="edit" class="tt-icon-btn tt-hover-02 tt-small-indent">
                        <i class="tt-icon">
                            <svg>
                                <use xlink:href="#icon-pencil"></use>
                            </svg>
                        </i>
                    </button>

                    <button @click="destroy" class="tt-icon-btn tt-hover-02 tt-small-indent">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import EditReply from "./EditReply";
    export default {
        name: "Reply",
        components: {EditReply},
        props: ['data', 'index'],
        data() {
            return {
                editing: false,
                beforeEditReplyBody: ''
            }
        },

        computed: {
            classes() {
                return '#icon-ava-' + this.data.user[0].toLowerCase()
            },

            own() {
                return User.own(this.data.user_id)
            }
        },

        created(){
            this.listen()
        },

        methods: {
            destroy(){
                EventBus.$emit('deleteReply', this.index)
            },
            edit() {
                this.editing = true
                this.beforeEditReplyBody = this.data.reply
            },

            listen(){
                EventBus.$on('cancelEditing', (reply) =>{
                    this.editing = false
                    if(reply !== this.data.reply){
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
