<template>

   <div class="partners-wrapper">
        <div class="row">

        <div>
            <div class="img-area">
                <img src="../assets/images/client-logos-3.png" alt="divider image">
            </div>
        </div>

        <div>
            <div class="img-area">
                <img src="../assets/images/client-logos-1.png" alt="divider image">
            </div>
        </div>

        <div>
            <div class="img-area">
                <img src="../assets/images/client-logos-4.png" alt="divider image">
            </div>
        </div>

        <div>
            <div class="img-area">
                <img src="../assets/images/client-logos-2.png" alt="divider image">
            </div>
        </div>

     </div>
   </div>

</template>

<script>


    export default {
        name: 'BrandPartners',
    }

</script>

<style lang="scss" scoped>

    @import "../style/common.scss";
    .partners-wrapper {
        background-image: url('../assets/images/rgb-gradient-bar-for-logo-carrasel.jpg');
    }
    .row {
        width: 600px;
        margin: 0 auto;
        overflow-x: scroll;
        display: flex;
        color: $txt-secondary-color;
        text-align: center;
        > div {
            padding: 30px 0;
        }
        img {
            width: 150px;
        }
    }
    
</style>