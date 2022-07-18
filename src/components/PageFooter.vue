<template>
  
    <div class="total-footer">

        <!-- Top area of the header -->
        <div class="top-footer large-container">

            <div class="informations col">
                <div class="logo">
                    <img src="../assets/images/medical_logo_1x_dark.png" alt="avada health logo">
                </div>
            </div>

            <div class="contacts col">
                via garibaldi 31
            </div>

            <div class="navigation col">
                
                <ul>
                    <li v-for="(link,index) in footerLinks" :key="index">
                        <a :href="link.url">{{link.name}}</a>
                    </li>
                </ul>
                
            </div>

        </div>

        <div class="bottom-footer">
            <div class="large-container">
                Copyright
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
        .col {
            width: calc(100% / 3);
            img {
                width: 200px;
            }
        }
        .navigation {
            display: flex;
            font-size: 12px;
            ul {
                display: block;
                li {
                    list-style-type: none;
                    margin: 0 15px;
                    a {
                        text-decoration: none;
                        color: inherit;
                    }
                }
            }
        }   
    }
    .bottom-footer {
        background-color: $bg-secondary-color;
        padding: 10px 0;
    }

</style>
