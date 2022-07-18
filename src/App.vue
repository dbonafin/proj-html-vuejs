<template>

  <div id="app">

    <!-- Here will be the header section (header+jumbotron) -->
    <header>
      <PageHeader :navLinks="navLinks"/>
    </header>

    <!-- Here will be the global main section (all the main sections are sub-components of MainSection) -->
    <main>
      <MainSection/>
    </main>

    <!-- Here will be the footer section -->
    <footer>
      <PageFooter :footerLinks="footerLinks"/>
    </footer>

  </div>

</template>

<script>

  import NavLinks from './data/NavLinks.json';
  import FooterLinks from './data/FooterLinks.json'
  import PageHeader from './components/PageHeader.vue';
  import MainSection from './components/MainSection.vue';
  import PageFooter from './components/PageFooter.vue';

  export default {
    name: 'App',
    components: { 
      PageHeader, 
      MainSection, 
      PageFooter 
    },
    data() {
      return {
        navLinks: NavLinks,
        footerLinks: FooterLinks
      }
    }
  }

</script>

<style lang="scss">

  @import "./style/common.scss";
  
</style>
