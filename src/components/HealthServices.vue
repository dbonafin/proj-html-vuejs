<template>
    
    <div class="small-container">

        <!-- Top area of the doctors section -->
        <div class="top-area">

            <img src="../assets/images/icon-6.png" alt="doctors icon">

            <h2>our health services</h2>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima ex officiis laudantium, expedita similique velit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil eaque expedita.
            </p>
        </div>

        <!-- Top area of the doctors section -->
        <div class="bottom-area">

            
            <div class="bottom-area">

                <!-- Single service column info -->
                <div class="health-col">
                    <img src="../assets/images/icon-14.png" alt="appointments icon">

                    <h3>rehabilitation center</h3>

                    <p>
                        Ollare come pegaso lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <!-- Single service column info -->
                <div class="health-col">
                    <img src="../assets/images/icon-15.png" alt="facilities icon">

                    <h3>dental implants</h3>

                    <p>
                        Ollare come pegaso lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <!-- Single service column info -->
                <div class="health-col">
                    <img src="../assets/images/icon-16.png" alt="doctors icon">

                    <h3>medicine research</h3>

                    <p>
                        Ollare come pegaso lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <!-- Single service column info -->
                <div class="health-col">
                    <img src="../assets/images/icon-11.png" alt="therapies icon">

                    <h3>blood bank</h3>

                    <p>
                        Ollare come pegaso lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <!-- Single service column info -->
                <div class="health-col">
                    <img src="../assets/images/icon-12.png" alt="therapies icon">

                    <h3>pharmaceutical advice</h3>

                    <p>
                        Ollare come pegaso lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <!-- Single service column info -->
                <div class="health-col">
                    <img src="../assets/images/icon-13.png" alt="therapies icon">

                    <h3>medical counseling</h3>

                    <p>
                        Ollare come pegaso lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>

        </div>

    </div>
    
</template>

<script>


    export default {
        name: 'HealthServices',
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
                background-color: #bcbcbd;
                margin: 20px auto;
            }
        }
    }
    .bottom-area {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        .health-col {
            padding: 20px;
            width: calc(100% / 3);
            text-align: center;
            img {
                width: 60px;
                display: block;
                margin: 0 auto;
            }
            h3 {
                text-transform: uppercase;
                margin: 10px 0;
            }
            p {
                font-size: 10px;
            }
            }
        }
    }
    
</style>