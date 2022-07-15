<template>

    <section>
        <!-- Welcome to avada intro section -->
        <BrandIntroduction/>

        <!-- Meet our doctors section -->
        <!-- icon, title, text and 3 doctor info cards (picture, title, text, socials) -->
        <DoctorsSection/>

    </section>

</template>

<script>

    import BrandIntroduction from "./BrandIntroduction.vue";
    import DoctorsSection from "./DoctorsSection.vue";

    export default {
        name: "MainSection",
        components: { BrandIntroduction, DoctorsSection }
    }

</script>

<style lang="scss">
    
</style>