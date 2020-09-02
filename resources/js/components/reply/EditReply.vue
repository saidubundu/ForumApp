<template>
    <div class="pt-editor form-default">
        <h6 class="pt-title">Edit Your Reply</h6>
        <div class="pt-row">
            <div class="col-left">
                <ul class="pt-edit-btn">
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-quote"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-bold"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-italic"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-share_topic"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-blockquote"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-performatted"></use>
                            </svg>
                        </button>
                    </li>
                    <li class="hr"></li>
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-upload_files"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-bullet_list"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-heading"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-horizontal_line"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-emoticon"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-settings"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn-icon">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-color_picker"></use>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            <div class="col-right tt-hidden-mobile">
                <a href="#" class="btn btn-primary">Preview</a>
            </div>
        </div>
        <div class="form-group">
            <textarea v-model="reply.reply" name="message" class="form-control" rows="5" placeholder="Lets get started"></textarea>
        </div>
        <div class="pt-row">
            <div class="col-auto">
                <button @click="cancel" class="tt-icon-btn tt-hover-02 tt-small-indent">
                    <i class="fa fa-times-circle"></i>
                </button>
            </div>
            <div class="col-auto">
                <button @click="update" class="tt-icon-btn tt-hover-02 tt-small-indent">
                    <i class="fa fa-save"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditReply",
        props:['reply'],

        methods:{
            update(){
                axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body: this.reply.reply})
                .then(res => this.cancel(this.reply.reply))
            },

            cancel(reply){
                EventBus.$emit('cancelEditing', reply);
            }
        }
    }
</script>

<style scoped>

</style>
