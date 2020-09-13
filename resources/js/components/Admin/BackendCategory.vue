<template>
    <div>
    <b-form @submit.prevent="submit">
        <b-form-group
            id="input-group-1"
            label="Category name:"
            label-for="input-1"
        >
            <b-form-input
                id="input-1"
                v-model="form.name"
                required
                placeholder="Enter email"
            ></b-form-input>
        </b-form-group>
        <b-button v-if="editSlug" type="submit" variant="primary">Update</b-button>
        <b-button v-else type="submit" variant="primary">Create</b-button>
    </b-form>
    <div v-if="categories" v-for="(category, index) in categories" :key="category.id" >
        <div class="tt-item">
            <div class="tt-col-category"><span class="tt-color01 tt-badge">{{category.name}}</span></div>
            <b-icon icon="pencil-square" @click="edit(index)"></b-icon>
            <b-icon icon="trash-fill" @click="destroy(index)"></b-icon>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "BackendCategory",
        data(){
            return {
                form:{
                    name:null
                },
                categories: {},
                editSlug: null
            }
        },

        created() {
            this.getCategories()
        },

        methods:{
            getCategories(){
                axios.get('/api/category')
                    .then(res => this.categories = res.data.data)
            },

            submit(){
                this.editSlug ? this.update() : this.create()
            },

            update(){
                axios.patch(`/api/category/${this.editSlug}`, this.form)
                    .then(res =>{
                        this.categories.unshift(res.data)
                        this.form.name = null
                    })
            },

            create(){
                axios.post('/api/category', this.form)
                    .then(res =>{
                        this.categories.unshift(res.data)
                        this.form.name = null
                    })
            },

            destroy(slug, index){
                axios.delete(`/api/category/${slug}`)
                    .then(res => this.categories.splice(index,1))
            },
            edit(index){
                this.form.name = this.categories[index].name
                this.editSlug = this.categories[index].slug
                this.categories.splice(index,1)
            }
        }
    }
</script>

<style scoped>

</style>
