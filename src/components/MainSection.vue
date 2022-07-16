<template>

    <section>
        <!-- Welcome to avada intro section -->
        <BrandIntroduction/>

        <!-- Meet our doctors section -->
        <DoctorsSection/>

        <!-- Our health services section -->
        <HealthServices/>

    </section>

</template>

<script>

    import BrandIntroduction from "./BrandIntroduction.vue";
    import DoctorsSection from "./DoctorsSection.vue";
    import HealthServices from "./HealthServices.vue";

    export default {
        name: "MainSection",
        components: {
        BrandIntroduction,
        DoctorsSection,
        HealthServices
        }
    }

</script>

<style lang="scss">
    
</style>