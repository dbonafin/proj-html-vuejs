<template>
  
    <div class="total-footer">

        <!-- Top area of the header -->
        <div class="top-footer large-container">

            <!-- Navigation area content -->
            <div class="informations col">
                <div class="logo">
                    <img src="../assets/images/medical_logo_1x_dark.png" alt="avada health logo">
                </div>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit odit veritatis doloribus illum eum sunt. Aliquid, dolorem cupiditate! Tenetur esse nostrum amet repellat corrupti soluta boolean true javascript.
                </p>

                <div>
                <h4>learn more about us</h4>

                <div class="socials">
                    <span class="fb-icon social-icon">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    </span>

                    <span class="yt-icon social-icon">
                        <font-awesome-icon icon="fa-brands fa-youtube" />
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
            
            <!-- Contacts area content -->
            <div class="contacts col">
                <h3>contact information</h3>
                <div>
                    <span class="contacts-icon">
                        <font-awesome-icon icon="fa-solid fa-location-dot"/>
                    </span>
                    <span class="gray-opa"> 121 King Street, London United Kingdom</span>
                </div>
                <div>
                    <span class="contacts-icon">
                        <font-awesome-icon icon="fa-solid fa-phone-flip"/>
                    </span>
                    <span class="gray-opa">1.800.458.556</span>
                </div>
            </div>

            <!-- Navigation area content -->
            <div class="navigation col">
                <h3>medical departments</h3>
                
                <ul>
                    <li v-for="(link,index) in footerLinks" :key="index">
                        <a :href="link.url">
                          <font-awesome-icon class="chevron" icon="fa-solid fa-chevron-right" />{{link.name}}
                        </a>
                    </li>
                </ul>

                <span class="btn clear-btn">
                    <a href="#">view our departments</a>
                </span>
                
            </div>

        </div>

        <div class="bottom-footer">
            <div class="large-container">
               <span class="copy-text">&copy; Copyright 2022</span>
                
               <span class="copy-text">Avada health by dbonafin</span>

               <span class="copy-text">All rights reserved</span>

               <span class="last-text">Powered by Vue Cli</span>

            </div>
        </div>

    </div>

</template>

<script>

export default {
  name: 'PageFooter',
  props: {footerLinks: Array}
}
</script>

<style lang="scss" scoped>

  @import "../style/common.scss";

  .top-footer {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
        // Common footer styles
        .col {
            width: calc(100% / 3);
            padding: 0 10px;
            img {
                width: 200px;
            }
            h3 {
                text-transform: uppercase;
                &:after {
                    content: '';
                    display: block;
                    width: 30px;
                    height: 2px;
                    background-color: $brand-main-color;
                    margin: 10px 0;
                }
            }
            p {
                &:after {
                    content: '';
                    display: block;
                    width: 400px;
                    height: 1px;
                    background-color: #bcbcbd;
                    margin-top: 20px;
                }
            }
        }
        // Informations column styles
        .informations {
            h4 {
                text-transform: uppercase;
            }
            .socials {
                margin: 30px 0;
            }
            p {
                opacity: calc(0.6);
            }
        }
        // Contact column styles
        .contacts {
            span {
                font-size: 12px;
                margin: 0 10px;
            }
            .contacts-icon {
                margin: 0 5px;
                color: $brand-main-color;
            }
              .gray-opa {
                    opacity: calc(0.6);
                }
        }
        // Navigation column styles
        .navigation {
            display: flex;
            flex-direction: column;
            font-size: 12px;
            ul {
                display: block;
                li {
                    list-style-type: none;
                    margin-left: 5px;
                    a {
                        text-decoration: none;
                        color: inherit;
                        .chevron {
                            font-size: 8px;
                            color: $bg-main-color;
                            background-color: $brand-main-color;
                            width: 10px;
                            height: 10px;
                            border-radius: 10px;
                            padding: 3px;
                            vertical-align: middle;
                            margin-right: 10px;
                        }
                    }
                   
                }
            }
            .clear-btn {
                width: 230px;
                margin-top: 20px;
                transform: rotateX(40deg);
                border: 1px solid $txt-main-color;
            }
        }  
    }
    // Bottom footer styles
    .bottom-footer {
        background-color: $bg-secondary-color;
        padding: 10px 0;
        font-size: 12px;
        opacity: calc(0.6);
        .copy-text {
            border-right: 1px solid gray;
            padding: 0 10px;
        }
        .last-text {
            padding: 0 10px;
        }
    }

</style>
