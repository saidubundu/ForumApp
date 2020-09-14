<template>
    <div class="pt-editor form-default">
        <h6 class="pt-title">Edit Your Reply</h6>
        <div class="form-group">
            <ckeditor :editor="editor" v-model="reply.reply" :config="editorConfig"></ckeditor>
        </div>
        <div class="pt-row">
            <div class="col-auto">
                <b-icon @click="cancel" icon="x-circle-fill" variant="secondary" font-scale="1.5"></b-icon>

            </div>
            <div class="col-auto">
                <b-icon @click="update" icon="check-circle-fill" variant="success" font-scale="1.5"></b-icon>
            </div>
        </div>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    export default {
        name: "EditReply",
        props:['reply'],

        data(){
            return{
                editor: ClassicEditor,
                editorConfig: {
                    // The configuration of the rich-text editor.
                }
            }
        },

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
