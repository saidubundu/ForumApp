<template>
    <div class="tt-item">
        <div class="tt-col-avatar">
            <svg class="tt-icon">
                <use xlink:href="#icon-ava-n"></use>
            </svg>
        </div>
        <div class="tt-col-description">
            <h6 class="tt-title"><a href="#">
               {{data.name}}
            </a></h6>
            <div class="row align-items-center no-gutters hide-desktope">
                <div class="col-9">
                    <ul class="tt-list-badge">
                        <li class="show-mobile"><a href="#"><span class="">{{data.email}}</span></a></li>
                    </ul>
                </div>
                <div class="col-3 ml-auto show-mobile">
                    <div class="tt-value">{{data.created}}</div>
                </div>
            </div>
        </div>
        <div class="tt-col-category tt-col-value-large hide-mobile"><span class="">{{data.email}}</span></div>
        <div class="tt-col-value-large hide-mobile">{{data.created}}</div>
    </div>
</template>

<script>
    export default {
        name: "Users",
        props:['data']
    }
</script>

<style scoped>

</style>
