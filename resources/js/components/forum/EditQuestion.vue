<template>
        <main id="tt-pageContent">
            <div class="container">
                <div class="tt-wrapper-inner">
                    <h1 class="tt-title-border">
                        Edit Topic
                    </h1>
                    <form class="form-default form-create-topic" @submit.prevent="update">
                        <div class="form-group">
                            <label for="inputTopicTitle">Topic Title</label>
                            <div class="tt-value-wrapper">
                                <input type="text" v-model="form.title" name="name" class="form-control" id="inputTopicTitle" placeholder="Subject of your topic">
                                <span class="tt-value-input">99</span>
                            </div>
                            <div class="tt-note">Describe your topic well, while keeping the subject as short as possible.</div>
                        </div>
                        <div class="pt-editor">
                            <h6 class="pt-title">Topic Body</h6>
                            <div class="pt-row">
                                <div class="col-left">
                                    <ul class="pt-edit-btn">
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-quote"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-bold"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-italic"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-share_topic"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-blockquote"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-performatted"></use>
                                            </svg>
                                        </button></li>
                                        <li class="hr"></li>
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-upload_files"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-bullet_list"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-heading"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-horizontal_line"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-emoticon"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-settings"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" class="btn-icon">
                                            <svg class="tt-icon">
                                                <use xlink:href="#icon-color_picker"></use>
                                            </svg>
                                        </button></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="form-group">
                                <ckeditor :editor="editor" v-model="form.body" :config="editorConfig"></ckeditor>
                            </div>
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
                                        <input type="text" name="name" class="form-control" id="inputTopicTags" placeholder="Use comma to separate tags">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <button type="submit" class="btn btn-primary btn-width-lg">Cancel </button>
                                </div>

                                <div class="col-md-2">
                                    <button type="submit" class="btn btn-success btn-width-lg">Update Post</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    export default {
        name: "EditQuestion",
        props: ['data'],
        data(){
            return{
                form:{
                    title:null,
                    body:null,
                    category_id:null
                },
                categories:{},
                editor: ClassicEditor,
                editorConfig: {
                    // The configuration of the rich-text editor.
                }
            }
        },
        created() {
            this.form = this.data
            this.getCategory()
        },
        methods:{
            getCategory(){
                axios.get('/api/category')
                    .then(res => this.categories = res.data.data)
                    .catch(error => console.log(error.response.data))
            },
            cancel(){
                EventBus.$emit('cancelEditing')
            },
            update(){
                axios.patch(`/api/question/${this.data.slug}`, this.form)
                .then(res => this.cancel())
            }
        }
    }
</script>

<style scoped>

</style>
