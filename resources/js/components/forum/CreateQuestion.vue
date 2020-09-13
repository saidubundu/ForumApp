<template>
    <main id="tt-pageContent" class="tt-offset-small">
        <div class="container">
        <br>
                <div class="tt-wrapper-inner">
                    <h1 class="tt-title-border">
                        Create New Topic
                    </h1>
                    <form class="form-default form-create-topic" @submit.prevent="create">
                        <div class="form-group">
                            <label for="inputTopicTitle">Topic Title</label>
                            <div class="tt-value-wrapper">
                                <input type="text" v-model="form.title" name="name" class="form-control" id="inputTopicTitle" placeholder="Subject of your topic">
                                <span class="tt-value-input">99</span>
                            </div>
                            <b-form-invalid-feedback v-if="errors.title">
                               {{errors.name[0]}}
                            </b-form-invalid-feedback>
                            <div v-else class="tt-note">Describe your topic well, while keeping the subject as short as possible.</div>
                        </div>
                        <div class="pt-editor">
                            <h6 class="pt-title">Topic Body</h6>

                               <vue-simplemde v-model="form.body" ref="markdownEditor" />

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="inputTopicTitle" >Category</label>
<!--                                        v-for="question in questions" :key="question.path" :data="question"-->
                                        <select class="form-control"  v-model="form.category_id">
                                            <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="form-group">
                                        <label for="inputTopicTags">Tags</label>
                                        <input type="text" name="name" class="form-control" id="inputTopicTags" placeholder="Please leave this empty">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-auto ml-md-auto">
                                    <b-button :disabled="disabled" size="lg" class="btn btn-secondary btn-width-lg">Create Question</b-button>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
    </div>
    </main>
</template>

<script>
    import VueSimplemde from 'vue-simplemde';
    export default {
        name: "CreateQuestion",
        components: {VueSimplemde},
        data(){
            return{
               form:{
                   title:null,
                   body:null,
                   category_id:null
               },
                categories:{},
                errors:{}
            }
        },
        computed:{
            disabled(){
                return !(this.form.title && this.form.body && this.form.category_id)
            }
        },

        created() {
            axios.get('/api/category')
            .then(res => this.categories = res.data.data)
            .catch(error => console.log(error.response.data))
        },

        methods:{
            create(){
                axios.post('/api/question', this.form)
                .then(res => this.$router.push(res.data.path))
                .catch(error => this.errors = error.response.data.error)
            }
        },


    }
</script>

<style scoped>
    @import '~simplemde/dist/simplemde.min.css';
</style>
