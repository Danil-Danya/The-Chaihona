<template>
    <AboutSection class="about-container"/>
    <Staff />
</template>

<script>
import AboutSection from '@/components/reused/pages/AboutSection.vue';
import Staff from '@/components/pages/about/Staff.vue';

export default {
    components: {
        AboutSection,
        Staff
    }
}
</script>

<style lang="scss">
    @import url('@/assets/styles/component-styles/about-section.scss');
    @import url('@/assets/styles/component-styles/staff.scss');
</style>