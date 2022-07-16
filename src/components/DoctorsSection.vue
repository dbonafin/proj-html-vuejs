<template>

    <div class="doctors-wrapper">
        <div class="small-container">

            <!-- Top area of the doctors section -->
            <div class="top-area">

                <img src="../assets/images/icon-5.png" alt="doctors icon">

                <h2>meet our doctors</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima ex officiis laudantium, expedita similique velit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil eaque expedita.
                </p>
            </div>

            <!-- Top area of the doctors section -->
            <div class="bottom-area">

                <!-- Single doctor card infos -->
                <div class="doctor-card">
                    <div class="img-area">
                        <img src="../assets/images/doctor-1.jpg" alt="doctor picture">
                    </div>

                    <div class="txt-area">
                        <h3>jon snow</h3>
                        <h4>Anesthesiologist</h4>

                        <p>
                            Christian dior lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>

                        <div class="socials">
                            <span class="fb-icon social-icon">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            </span>

                            <span class="twt-icon social-icon">
                                 <font-awesome-icon icon="fa-brands fa-twitter" />
                            </span>

                             <span class="insta-icon social-icon">
                                 <font-awesome-icon icon="fa-brands fa-instagram" />
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Single doctor card infos -->
                <div class="doctor-card">
                    <div class="img-area">
                        <img src="../assets/images/doctor-2.jpg" alt="doctor picture">
                    </div>

                    <div class="txt-area">
                        <h3>tony stark</h3>
                        <h4>Cardiologist</h4>

                        <p>
                            Christian dior lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <div class="socials">
                            <span class="fb-icon social-icon">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            </span>

                            <span class="twt-icon social-icon">
                                 <font-awesome-icon icon="fa-brands fa-twitter" />
                            </span>

                             <span class="insta-icon social-icon">
                                 <font-awesome-icon icon="fa-brands fa-instagram" />
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Single doctor card infos -->
                <div class="doctor-card">
                    <div class="img-area">
                        <img src="../assets/images/doctor-3.jpg" alt="doctor picture">
                    </div>

                    <div class="txt-area">
                        <h3>anna smith</h3>
                        <h4>Nurse Practicioner</h4>

                        <p>
                            Christian dior lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>

                        <div class="socials">
                            <span class="fb-icon social-icon">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            </span>

                            <span class="twt-icon social-icon">
                                 <font-awesome-icon icon="fa-brands fa-twitter" />
                            </span>

                             <span class="insta-icon social-icon">
                                 <font-awesome-icon icon="fa-brands fa-instagram" />
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>

<script>


    export default {
        name: 'DoctorsSection',
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
            .doctor-card {
                padding: 20px;
                img {
                    display: block;
                }
                .txt-area {
                    padding: 25px 20px;
                    background-color: $bg-main-color;
                    h3 {
                        text-transform: uppercase;
                    }
                    p {
                        font-size: 10px;
                        margin: 15px 0;
                    }
                    .socials {
                        svg {
                        font-size: 14px;
                        vertical-align: middle;
                        }
                    }
                    }
                }
            }
        }
    }
    
</style>