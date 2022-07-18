<template>

  <div id="app">

    <!-- Common -->
    <!-- Header nav and footer medical departments will be dynamic (props) -->
    <!-- Header, footer, 3 columns section with different bg colors - width 90% margin 0 auto -->
    <!-- All other sections - width  60% margin 0 auto  -->

    <!-- Here will be the header section (header+jumbotron) -->
    <header>
      <PageHeader :navLinks="navLinks"/>
    </header>

    <!-- Here will be the global main section (all the main sections are sub-components of MainSection) -->
    <main>

      <MainSection/>

      <!-- Make an appointment section -->
      <!-- title, :after div, text, info request form and "button" -->

      <!-- Avada partners section -->
      <!-- Brand partners to show while scrolling (overflow x) -->
    </main>

    <!-- Here will be the footer section -->
    <footer>
      <!-- Top footer (three columns) -->

      <!-- Bottom footer (ul inline-block) -->
    </footer>

  </div>

</template>

<script>

  import NavLinks from './data/NavLinks.json';
  import PageHeader from './components/PageHeader.vue';
  import MainSection from './components/MainSection.vue';

  export default {
    name: 'App',
    components: { PageHeader, MainSection },
    data() {
      return {
        navLinks: NavLinks
      }
    }
  }

</script>

<style lang="scss">

  @import "./style/common.scss";
  
</style>
