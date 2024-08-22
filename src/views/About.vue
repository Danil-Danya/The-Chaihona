<template>
    <AboutSection class="about-container"/>
    <Staff />
    <Contacts />
</template>

<script>
import AboutSection from '@/components/reused/pages/AboutSection.vue';
import Staff from '@/components/pages/about/Staff.vue';
import Contacts from '@/components/reused/contacts/Contacts.vue';

export default {
    components: {
        AboutSection,
        Staff,
        Contacts
    },

    mounted () {
        document.title = 'The Choyhona - о сервисе'
    }
}
</script>

<style lang="scss">
    @import url('@/assets/styles/component-styles/about-section.scss');
    @import url('@/assets/styles/component-styles/staff.scss');
    @import url('@/assets/styles/component-styles/contacts.scss');
</style>