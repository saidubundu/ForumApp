<template>
    <main id="tt-pageContent" class="tt-offset-small">
        <div class="container">
                <div class="tt-topic-list">
                    <div class="tt-list-header">
                        <div class="tt-col-topic">Topic</div>
                        <div class="tt-col-category">Category</div>
                        <div class="tt-col-value hide-mobile">Likes</div>
                        <div class="tt-col-value hide-mobile">Replies</div>
                        <div class="tt-col-value hide-mobile">Views</div>
                        <div class="tt-col-value">Activity</div>
                    </div>
                    <div class="tt-topic-alert tt-alert-default" role="alert">
                        <a href="#" target="_blank">4 new posts</a> are added recently, click here to load them.
                    </div>

                    <div v-if="loading" class="text-center mt-7">
                        <b-spinner label="Spinning"></b-spinner>
                        <b-spinner type="grow" label="Spinning"></b-spinner>
                        <b-spinner variant="primary" label="Spinning"></b-spinner>
                        <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
                        <b-spinner variant="success" label="Spinning"></b-spinner>
                        <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
                    </div>

                    <question v-if="questions" v-for="question in questions" :key="question.path" :data="question"></question>

                    <div class="tt-row-btn">
                        <button type="button" class="btn-icon js-topiclist-showmore" v-show="moreExist">
                            <svg class="tt-icon" @click="loadMore">
                                <use  xlink:href="#icon-load_lore_icon"></use>
                            </svg>
                        </button>
                    </div>
                </div>
    </div>
    </main>
</template>

<script>
    import Question from "./Question";
    export default {
        name: "Forum",
        components: {Question},
        data(){
            return{
                loading: false,
                questions:{},
                nextPage: 0,
                moreExist: false
            }
        },

        created(){
            this.loading = true;
            axios.get('api/question')
            .then(res =>{
                this.loading = false;
                this.questions = res.data.data;
                if (res.data.meta.current_page < res.data.meta.last_page){
                    this.moreExist = true
                    this.nextPage = res.data.meta.current_page + 1
                }
                else{
                    this.moreExist = false
                }
            })
            .catch(error => console.log(error.response.data))
        },

        methods:{
            loadMore(){
                axios.get(`/api/question?page=${this.nextPage}`)
            }
        }
    }
</script>

<style scoped>

</style>
