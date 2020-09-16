<template>
    <div class="tt-icon-btn" @click="marked">
        <b-icon icon="check2-all" font-scale="1.5" style="color:red"></b-icon>
    </div>
</template>

<script>
    export default {
        name: "MarkAsBest",
        props: ['content'],

        methods:{
            marked(){
                if (User.loggedIn()) {
                    axios.post(`/api/reply/${this.content.id}/accept`)
                        .then(res => {
                            console.log(res)
                            this.$toast.success(res.data.message, "Success", {timeout: 3000});
                        })
                }
            }
        }
    }
</script>

<style scoped>

</style>
