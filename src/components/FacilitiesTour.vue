<template>
    
   <div class="facilities-wrapper">
        <div class="small-container">

            <!-- Top area of the doctors section -->
            <div class="top-area">

                <img src="../assets/images/icon-7.png" alt="eye icon">

                <h2>tour our facilities</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima ex officiis laudantium, expedita similique velit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil eaque expedita.
                </p>

                <img class="play-icon" src="../assets/images/play-icon.png" alt="play icon">

            </div>

        </div>
   </div>
    
</template>

<script>


    export default {
        name: 'FacilitiesTour',
    }

</script>

<style lang="scss" scoped>

    @import "../style/common.scss";
    .facilities-wrapper {
        background-image: url('../assets/images/paralax-bg-tour-facilities.jpg');
        background-position: center;
        background-size: cover;      
        display: flex;
        align-items: center;
    }
    .small-container {
    padding: 100px 0;
    color: $txt-secondary-color;
    .top-area {
        width: 60%;
        margin: 0 auto;
        text-align: center;
        img{
            width: 60px;
        }
        h2 {
            text-transform: uppercase;
            font-size: 30px;
            margin: 10px 0;
            &:after {
                content: '';
                display: block;
                width: 200px;
                height: 1px;
                background-color: $txt-secondary-color;
                margin: 20px auto;
            }
        }
        .play-icon{
            width: 50px;
            margin-top: 20px;
        }
    }
    }
    
</style>