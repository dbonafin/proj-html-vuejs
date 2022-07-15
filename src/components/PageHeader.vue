<template>
  
  <div class="total-header">

    <!-- Top area of the header -->
    <div class="top-header large-container">

      <div class="logo">
        <img src="../assets/images/medical_logo_1x_light.png" alt="avada health logo">
      </div>

      <div class="navigation">
        <nav>
          <ul>
            <li v-for="(link,index) in navLinks" :key="index">
              <a :href="link.url">{{link.name}}</a>
            </li>
          </ul>

          <span class="btn color-btn">
            <a href="#">make appointment</a>
          </span>
        </nav>
      </div>

    </div>

    <!-- Jumbotron area -->
    <div class="jumbotron">
      <h2>
        Caring <span class="main-color-text">For Life</span>
      </h2>

      <p>{{ introMessage }}</p>

      <span class="btn color-btn">
        <a href="#">learn more</a>
      </span>
    </div>

  </div>

</template>

<script>

export default {
  name: 'ResetDone',
  data() {
    return {
      introMessage: 'Kind words can be short and easy to speak, but their echoes are truly endless. Avada Health focuses on you as if it was our own family.'
    }
  },
  props: {navLinks: Array}
}
</script>

<style lang="scss">

  @import "../style/common.scss";

  .total-header {
    position: relative;
    color: $txt-secondary-color;
    background-size: cover;
    background-image: url('../assets/images/header-image-homepage.jpg');
    height: 690px;
    .top-header {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      .logo {
        width: 250px;
      }
    }
    .navigation {
      display: flex;
      font-size: 12px;
      ul {
        display: inline-flex;
        li {
          list-style-type: none;
          margin: 0 15px;
          a {
            text-transform: uppercase;
            text-decoration: none;
            color: inherit;
          }
          &:first-child  {
          color: $brand-main-color;
        } 
        }
      }
    }
    .jumbotron {
      width: 33%;
      position: absolute;
      top: 240px;
      left: 390px;
      h2 {
        font-size: 50px;
      }
      p {
        margin: 20px 0;
      }
    }
    .color-btn {
      background-color: $brand-main-color;
    }
  }

</style>
