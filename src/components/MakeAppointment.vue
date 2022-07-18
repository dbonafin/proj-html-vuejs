<template>
    
   <div class="appointment-wrapper">
        <div class="small-container">

            <!-- Top area of the appointment section -->
            <div class="top-area">

                <h2>make an appointment</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima ex officiis laudantium, expedita similique velit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil eaque expedita.
                </p>

                <div class="appointment-form">
                    <form>

                        <!-- Input group -->

                        <div class="form-row">
                            
                            <div class="form-group">
                                <label for="inputName">Name</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="inputName" 
                                    placeholder="Name*"
                                >
                            </div>

                            <div class="form-group">
                                <label for="inputEmail">Email</label>
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="inputEmail" 
                                    placeholder="Email*"
                                >
                            </div>

                        </div>

                        <div class="form-row">
                            
                            <div class="form-group">
                                <label for="inputNumber">Phone Number</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="inputNumber" 
                                    placeholder="Phone Number"
                                >
                            </div>

                            <div class="form-group">
                                <label for="inputDate">Date</label>
                                <input 
                                    type="date" 
                                    class="form-control" 
                                    id="inputDate"
                                    placeholder="Appointment Date"
                                >
                            </div>
                            
                        </div>

                        <div>
                            <!-- Request info text area -->
                            <div class="form-group form-request">
                                <label for="formTextArea">TextArea</label>

                                <textarea 
                                    class="form-control" 
                                    id="formTextArea" 
                                    rows="3"
                                    placeholder="How can we help?*">
                                </textarea>
                            </div>
                            
                        </div>

                        <!-- Submit button -->
                        <span class="btn color-btn">
                            <a href="#">make an appointment</a>
                        </span>
                         
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
    .appointment-wrapper {
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
            margin-top: 20px;
            label {
                display: none;
            }
            input, textarea {
                width: 100%;
                margin: 10px 0;
                padding: 2px;
                background-color: transparent;
                border: 1px solid $txt-secondary-color;
                color: $txt-secondary-color;
                opacity: calc(0.6);
                font-size: 10px;
            }
            .form-group {
                width: calc((100% / 2) - 10px);
                ::placeholder {
                    padding: 10px;
                    color: $txt-secondary-color;
                    opacity: calc(0.6);
                }
            }
            .form-request {
                width: 100%;
            }
            .form-row {
                display: flex;
                justify-content: space-between;
            }
            
        }}
        .color-btn {
            width: 100%;
            background-color: $brand-main-color;
        }
      
    }
    
</style>