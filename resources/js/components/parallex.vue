<template>
    <main id="tt-pageContent" class="tt-offset-small">
        <div class="row">
<div class="opening">
    <h1 class="opening-h1">SELP FORUM</h1>
    <h2 class="opening-h2">Selp is a community of creatives who come together to share ideas and help each other succeed.</h2>
    <p class="opening-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis exercitationem inventore maxime nesciunt nobis placeat porro reiciendis suscipit vel!</p>
    <div class="btns">
        <b-button size="lg" variant="success">Join the community</b-button>
        <b-button class="btn-2" size="lg" variant="outline-success">visit the forum</b-button>
    </div>
</div>
        </div>

        <div class="row text-center user-icons">
            <div class="col-lg-4">

            </div>
            <div class="col-lg-4">
                <h1> SELP.CO OPERATOR MANUEL</h1>
                <div class="row">
                    <div class="col-lg-4 user-ic">

                        <b-icon style="color:#81C784" font-scale="7" icon="people-fill"></b-icon>
                        <div class="text">
                            <p class="stat">43,391 <br> USER</p>

                        </div>
                    </div>
                    <div class="col-lg-4 user2-ic">
                        <b-icon style="color:#81C784" font-scale="7" icon="sim"></b-icon>
                        <div class="text">
                            <p class="stat">63,221 <br> THREAD</p>

                        </div>
                    </div>
                    <div class="col-lg-4 user3-ic">
                        <b-icon style="color:#81C784" font-scale="7" icon="telephone-plus-fill"></b-icon>
                        <div class="text">
                            <p class="stat">12,998 <br>RESOLUTION</p>

                        </div>
                </div>

            </div>
            <div class="col-lg-4">

            </div>

            </div>
        </div>
        <div class="help">
            <h1>Need help?</h1>
            <p>search for the solution</p>
            <input class="search-box" type="search" placeholder="search for answers">
            <p class="cant-find">can't find what you're looking for? <a href="">create a new answer folder</a></p>
        </div>
    </main>
</template>

<script>
    export default {
        name: "parallex"
    }
</script>

<style scoped>

    .opening {
        width: 100%;
        height: 100vh;
        padding: 90px 100px;
        /*margin-top: 200px auto;*/
        text-align: center;

    }
    .opening-h1 {
        font-weight: bolder;
        font-size: 90px;
        padding-top: 150px;
        font-family: san-serif;
        margin: 40px;


    }

    .opening-h2 {
        font-weight: bolder;
        font-size: 30px;
        padding-top: 10px;

    }

    .opening-txt {
        max-width: 700px;
        padding-top: 20px;
        margin: 0 auto;

    }

    .btns {
        padding-top: 20px;

    }

    .btn-2 {
        margin-left: 14px;
    }

    .user-icons {

        align-items: center;
        margin: 0 auto;
        background-color: #E0E0E0;
        border-top: 1px solid #BDBDBD;
        border-bottom: 1px solid #BDBDBD;
        padding: 70px;


    }
    .user-ic, .user2-ic, .user3-ic {
        padding-top: 90px;

    }

    .text {
        text-align: center;
        padding-top: 10px;
        font-weight: lighter;

    }
   .stat {
    text-align: center;
       padding-top: 10px;



   }

    .help {
        text-align: center;
        padding: 100px;
        border-bottom: 1px solid #BDBDBD;
    }

    .search-box {
        width: 30%;
        padding:8px;
        outline: 2px solid black;
    }

    .cant-find {
        padding-top: 10px;

    }





</style>
