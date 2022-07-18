<template>
    
   <div class="facilities-wrapper">
        <div class="small-container">

            <!-- Top area of the doctors section -->
            <div class="top-area">

                <h2>make an appointment</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima ex officiis laudantium, expedita similique velit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil eaque expedita.
                </p>

                <div class="appointment-form">
                    <form>
                        <div class="form-row">
                            
                            <div class="form-group col-md-6">
                                <label for="inputPassword4 sr-only" >Name</label>
                                <input type="text" class="form-control" id="inputName" placeholder="Name">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                            </div>

                        </div>

                        <div class="form-row">
                            
                            <div class="form-group col-md-6">
                                <label for="inputPassword4 sr-only" >Name</label>
                                <input type="text" class="form-control" id="inputName" placeholder="Name">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                            </div>
                            
                        </div>

                        <div class="form-row">
                            
                            <div class="form-group col-md-6">
                                <label for="inputEmail">Email</label>
                                <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                            </div>
                            
                        </div>
                       
                        
                        <button type="submit" class="btn color-btn">Sign in</button>
                    </form>
                </div>
            </div>

        </div>
   </div>
    
</template>

<script>


    export default {
        name: 'MakeAppointment',
    }

</script>

<style lang="scss" scoped>

    @import "../style/common.scss";
    .facilities-wrapper {
        background-image: url('../assets/images/make-an-appointment.jpg');
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
            text-transform: capitalize;
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
        .appointment-form{
            label {
                display: none;
            }
            input {
                width: 300px;
                margin: 10px;
                background-color: transparent;
                border: 1px solid $txt-secondary-color;
            }
            .form-row {
                display: flex;
                justify-content: space-between;
            }
            
        }}
    }
    
</style>