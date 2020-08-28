<template>
    <div>
        <br>
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
                    <question  v-for="question in questions" :key="question.path" :data="question"></question>

                    <div class="tt-row-btn">
                        <button type="button" class="btn-icon js-topiclist-showmore">
                            <svg class="tt-icon">
                                <use xlink:href="#icon-load_lore_icon"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import Question from "./Question";
    export default {
        name: "Forum",
        components: {Question},
        data(){
            return{
                questions:{}
            }
        },

        created(){
            axios.get('api/question')
            .then(res => this.questions = res.data.data)
            .catch(error => console.log(error.response.data))
        }
    }
</script>

<style scoped>

</style>
