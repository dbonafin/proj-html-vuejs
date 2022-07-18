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

        <!-- 3 columns section with different bg colors -->
        <ThreeDiffCols/>

        <!-- Make an appointment section -->
        <!-- title, :after div, text, info request form and "button" -->
        <MakeAppointment/>
    </section>
    
</template>

<script>

    import BrandIntroduction from "./BrandIntroduction.vue";
    import DoctorsSection from "./DoctorsSection.vue";
    import HealthServices from "./HealthServices.vue";
    import FacilitiesTour from "./FacilitiesTour.vue";
    import ThreeDiffCols from "./ThreeDiffCols.vue";
    import MakeAppointment from "./MakeAppointment.vue";

    export default {
        name: "MainSection",
        components: {
            BrandIntroduction,
            DoctorsSection,
            HealthServices,
            FacilitiesTour,
            ThreeDiffCols,
            MakeAppointment
        }
    }

</script>

<style lang="scss">
</style>