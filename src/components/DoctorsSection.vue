<template>

    <div class="doctors-wrapper">
        <div class="small-container">

            <div class="top-area">

                <img src="../assets/images/icon-5.png" alt="doctors icon">

                <h2>meet our doctors</h2>

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

            </div>

        </div>
    </div>

</template>

<script>

    export default {
        name: 'DoctorsSection'
    }

</script>

<style lang="scss" scoped>

    @import "../style/common.scss";

    .doctors-wrapper {
        background-color: $bg-secondary-color;
        .small-container {
        padding: 80px 0;
        color: $txt-main-color;
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
                margin: 20px 0;
                &:after {
                    content: '';
                    display: block;
                    width: 200px;
                    height: 1px;
                    background-color: #7c858f;
                    margin: 20px auto;
                }
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
    }
    
</style>