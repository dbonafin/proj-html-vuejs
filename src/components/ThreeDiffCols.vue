<template>

   <div class="row">
        <!-- Single doctor card infos -->

        <div class="first-col">
            <div class="img-area">
                <h2>Emergency Care</h2>
                <img src="../assets/images/wave-divider.png" alt="divider image">
            </div>

            <div class="txt-area">

                <p>
                    Ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>

                <span class="btn clear-btn">
                    <a href="#">learn more</a>
                </span>
            </div>
        </div>

        <!-- Single doctor card infos -->
        <div class="second-col">
            <div class="img-area">
                <h2>Expert Diagnostics</h2>
                <img src="../assets/images/wave-divider.png" alt="divider image">
            </div>

            <div class="txt-area">

                <p>
                    Ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>

                <span class="btn clear-btn">
                    <a href="#">learn more</a>
                </span>
            </div>
        </div>

        <!-- Single doctor card infos -->
        <div class="third-col">
            <div class="img-area">
                <h2>Superb Rehabilitation</h2>
                <img src="../assets/images/wave-divider.png" alt="divider image">
            </div>

            <div class="txt-area">

                <p>
                    Ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>

                 <span class="btn clear-btn">
                    <a href="#">learn more</a>
                </span>
            </div>
        </div>

    </div>

</template>

<script>


    export default {
        name: 'ThreeDiffCols',
    }

</script>

<style lang="scss" scoped>

    @import "../style/common.scss";

    .row {
        display: flex;
        color: $txt-secondary-color;
        text-align: center;
        > div {
            padding: 30px;
            h2 {
                font-weight: 400;
            }
            .clear-btn {
                margin-top: 10px;
                transform: rotateX(40deg);
                border: 2px solid $txt-secondary-color;
            }
        }
        .first-col {
            background-color: $brand-main-color;
        }
        .second-col {
            background-color: #449ebf;
        }
        .third-col {
            background-color: #327ec7;
        }
        img {
            width: 50px;
        }
    }
    
</style>