<template>

   <div class="partners-wrapper">
        <div class="row">

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
                <img src="../assets/images/client-logos-3.png" alt="divider image">
            </div>
        </div>

        <div>
            <div class="img-area">
                <img src="../assets/images/client-logos-2.png" alt="divider image">
            </div>
        </div>

        <div>
            <div class="img-area">
                <img src="../assets/images/client-logos-1.png" alt="divider image">
            </div>
        </div>

        <div>
            <div class="img-area">
                <img src="../assets/images/client-logos-3.png" alt="divider image">
            </div>
        </div>

         <div>
            <div class="img-area">
                <img src="../assets/images/client-logos-4.png" alt="divider image">
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
        padding-top: 16px;
        background-image: url('../assets/images/rgb-gradient-bar-for-logo-carrasel.jpg');
        &:hover {
            // Custom scrollbar style
            ::-webkit-scrollbar {
            width: 2px;
            }

            ::-webkit-scrollbar-track {
            box-shadow: inset 0 0  rgba(255, 255, 255, 0.4);
            border-radius: 5px;
            }
            
            ::-webkit-scrollbar-thumb {
            background:  rgba(255, 255, 255, 0.4);
            border-radius: 5px;
            }

            ::-webkit-scrollbar-thumb:hover {
            background:  rgba(255, 255, 255, 0.4); 
            }
            // Remove the transparent border of the row
            .row {
                border-bottom: 0;
            }
        }
    }
    .row {
        width: 600px;
        margin: 0 auto;
        overflow-x: scroll;
        display: flex;
        color: $txt-secondary-color;
        text-align: center;
        border-bottom: 16px solid transparent;
        img {
            width: 200px;
        }
    }
   
    
</style>