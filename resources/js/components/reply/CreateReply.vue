<template>
    <div class="pt-editor form-default">
        <h6 class="pt-title">Post Your Reply</h6>
        <div class="form-group">
            <ckeditor :editor="editor" v-model="form.body" :config="editorConfig"></ckeditor>
        </div>
        <div class="pt-row">
            <div class="col-auto">
                <div class="checkbox-group">
                    <input type="checkbox" id="checkBox21" name="checkbox" checked="">
                    <label for="checkBox21">
                        <span class="check"></span>
                        <span class="box"></span>
                        <span class="tt-text">Subscribe to this topic.</span>
                    </label>
                </div>
            </div>
            <div class="col-auto">
                <b-button v-if="loggedIn" type="submit" class="btn btn-secondary btn-width-lg" @click="submit">Reply</b-button>

                <button v-else disabled type="submit" class="btn btn-disabled btn-width-lg">Reply</button>
            </div>
        </div>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    export default {
        name: "CreateReply",
        props: ['questionSlug'],


        data(){
            return{
                form:{
                    body:null
                },
                loggedIn: User.loggedIn(),
                editor: ClassicEditor,
                editorConfig: {
                    // The configuration of the rich-text editor.
                }
            }
        },

        methods:{
            submit(){
                axios.post(`/api/question/${this.questionSlug}/reply`, this.form)
                .then(res => {
                    this.form = ''
                    EventBus.$emit('createReply', res.data.reply)
                    window.scrollTo(0,0)
                })
            }
        }
    }
</script>

<style scoped>

</style>
