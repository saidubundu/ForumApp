<template>
   <div>
       <main id="tt-pageContent">
           <div class="tt-custom-mobile-indent container">
               <div class="tt-categories-title">
                   <div class="tt-title">Categories</div>

                   <div class="tt-search">
                       <form class="search-wrapper">
                           <div class="search-form">
                               <input type="text" class="tt-search__input" placeholder="Search Categories">
                               <button class="tt-search__btn" type="submit">
                                   <svg class="tt-icon">
                                       <use xlink:href="#icon-search"></use>
                                   </svg>
                               </button>
                               <button class="tt-search__close">
                                   <svg class="tt-icon">
                                       <use xlink:href="#icon-cancel"></use>
                                   </svg>
                               </button>
                           </div>
                       </form>
                   </div>
               </div>
               <div class="tt-categories-list">
                   <div class="row">
                       <categories v-for="category in categories" :key="category.id" :data="category"></categories>
                       <div class="col-12">
                           <div class="tt-row-btn">
                               <button type="button" class="btn-icon js-topiclist-showmore">
                                   <svg class="tt-icon">
                                       <use xlink:href="#icon-load_lore_icon"></use>
                                   </svg>
                               </button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </main>
   </div>
</template>

<script>
    import Categories from "./categories";
    export default {
        name: "Category",
        components: {Categories},
        data(){
           return{
               categories: {}
           }
        },

        created() {
            axios.get('/api/category')
            .then(res => this.categories = res.data.data)
        }
    }
</script>

<style scoped>

</style>
