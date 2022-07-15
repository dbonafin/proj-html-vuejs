<template>

    <div class="intro-wrapper">
        <div class="small-container">

            <div class="top-area">
                <h2>Welcome to Avada Health</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima ex officiis laudantium, expedita similique velit.
                </p>
            </div>

            <div class="bottom-area">

                <div>
                    <img src="../assets/images/icon-1.png" alt="appointments icon">

                    <h3>same day appointments</h3>

                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>

               <div>
                    <img src="../assets/images/icon-2.png" alt="facilities icon">

                    <h3>world class facilities</h3>

                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div>
                    <img src="../assets/images/icon-3.png" alt="doctors icon">

                    <h3>expert doctors</h3>

                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>

                <div>
                    <img src="../assets/images/icon-4.png" alt="therapies icon">

                    <h3>complementary therapies</h3>

                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
            </div>

        </div>
    </div>

</template>

<script>

    export default {
        name: 'BrandIntroduction'
    }

</script>

<style lang="scss" scoped>

    @import "../style/common.scss";

    .small-container {
        padding: 80px 0;
        color: $txt-main-color;
        .top-area {
            width: 60%;
            margin: 0 auto;
            text-align: center;
            h2 {
                font-size: 30px;
                margin-bottom: 20px;
            }
        }
        .bottom-area {
            display: flex;
            margin-top: 60px;
            text-align: center;
            img {
                width: 70px;
            }
            h3 {
                text-transform: uppercase;
                margin-bottom: 10px;
            }
        }
    }
    
</style>