<template>

    <section>
        <!-- Welcome to avada intro section -->
        <BrandIntroduction/>

        <!-- Meet our doctors section -->
        <DoctorsSection/>

        <!-- Our health services section -->
        <HealthServices/>

        <!-- Tour our facilities -->
        <!-- icon, title, :after div, text and play image -->
        <FacilitiesTour/>
    </section>

</template>

<script>

    import BrandIntroduction from "./BrandIntroduction.vue";
    import DoctorsSection from "./DoctorsSection.vue";
    import HealthServices from "./HealthServices.vue";
    import FacilitiesTour from "./FacilitiesTour.vue";

    export default {
        name: "MainSection",
        components: {
            BrandIntroduction,
            DoctorsSection,
            HealthServices,
            FacilitiesTour
        }
    }

</script>

<style lang="scss">
</style>