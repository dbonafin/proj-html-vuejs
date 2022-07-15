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
            
          </ul>

          <span class="btn color-btn">
            <a href="#">learn more</a>
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
        width: 200px;
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
