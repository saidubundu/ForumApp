<template>
    <div class="tt-item">
        <div class="tt-col-avatar">
            <svg class="tt-icon">
                <use xlink:href="#icon-ava-k"></use>
            </svg>
        </div>
        <div class="tt-col-description">
            <h6 class="tt-title"><router-link :to="data.path">
                <svg class="tt-icon">
                    <use xlink:href="#icon-pinned"></use>
                </svg>
                {{data.title}}
            </router-link></h6>
            <div class="row align-items-center no-gutters">
                <div class="col-11">
                    <ul class="tt-list-badge">
                        <li class="show-mobile"><a href="#"><span class="tt-color05 tt-badge">{{data.category}}</span></a></li>
                        <li><a href="#"><span class="tt-badge">contests</span></a></li>
                        <li><a href="#"><span class="tt-badge">authors</span></a></li>
                    </ul>
                </div>
                <div class="col-1 ml-auto show-mobile">
                    <div class="tt-value">1h</div>
                </div>
            </div>
        </div>
        <div class="tt-col-category"><span class="tt-color05 tt-badge">{{data.category}}</span></div>
        <div class="tt-col-value hide-mobile">985</div>
        <div class="tt-col-value tt-color-select hide-mobile">502</div>
        <div class="tt-col-value hide-mobile">15.1k</div>
        <div class="tt-col-value hide-mobile">1h</div>
    </div>
</template>

<script>
    export default {
        name: "Question",
        props:['data']
    }
</script>

<style scoped>

</style>
