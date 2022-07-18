<template>

    <section>
        <!-- Welcome to avada intro section -->
        <BrandIntroduction/>

        <!-- Meet our doctors section -->
        <DoctorsSection/>

        <!-- Our health services section -->
        <HealthServices/>

        <!-- Tour our facilities -->
        <FacilitiesTour/>

        <!-- Three columns section with different bg colors -->
        <ThreeDiffCols/>

        <!-- Make an appointment section -->
        <MakeAppointment/>

        <!-- Avada partners section -->
        <BrandPartners/>
    </section>
    
</template>

<script>

    import BrandIntroduction from "./BrandIntroduction.vue";
    import DoctorsSection from "./DoctorsSection.vue";
    import HealthServices from "./HealthServices.vue";
    import FacilitiesTour from "./FacilitiesTour.vue";
    import ThreeDiffCols from "./ThreeDiffCols.vue";
    import MakeAppointment from "./MakeAppointment.vue";
    import BrandPartners from "./BrandPartners.vue";

    export default {
        name: "MainSection",
        components: {
            BrandIntroduction,
            DoctorsSection,
            HealthServices,
            FacilitiesTour,
            ThreeDiffCols,
            MakeAppointment,
            BrandPartners
        }
    }

</script>

<style lang="scss">
</style>