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
        <!-- title, image, text and "button" -->
        <ThreeDiffCols/>
    </section>
    
</template>

<script>

    import BrandIntroduction from "./BrandIntroduction.vue";
    import DoctorsSection from "./DoctorsSection.vue";
    import HealthServices from "./HealthServices.vue";
    import FacilitiesTour from "./FacilitiesTour.vue";
import ThreeDiffCols from "./ThreeDiffCols.vue";

    export default {
        name: "MainSection",
        components: {
    BrandIntroduction,
    DoctorsSection,
    HealthServices,
    FacilitiesTour,
    ThreeDiffCols
}
    }

</script>

<style lang="scss">
</style>