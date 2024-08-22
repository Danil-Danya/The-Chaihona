<template>
    <div>
        <Menu />
        <AboutSection />
        <Galery />
        <Buths />
        <Staff />
        <Blog />
        <Contacts />
    </div>
</template>

<script>

import Galery from '@/components/pages/index/Galery.vue';
import Staff from '@/components/pages/index/Staff.vue';
import AboutSection from '@/components/reused/pages/AboutSection.vue';
import Buths from '@/components/pages/index/Buths.vue';
import Menu from '@/components/pages/index/Menu.vue';
import Blog from '@/components/pages/index/Blog.vue';
import Contacts from '@/components/reused/contacts/Contacts.vue';

export default {
    components: {
        Galery,
        Staff,
        AboutSection,
        Buths,
        Menu,
        Blog,
        Contacts
    }
}

</script>

<style lang="scss">
    @import url('@/assets/styles/page-styles/index/menu.scss');
    @import url('@/assets/styles/component-styles/about-section.scss');
    @import url('@/assets/styles/page-styles/index/galery.scss');
    @import url('@/assets/styles/page-styles/index/buths.scss');
    @import url('@/assets/styles/component-styles/staff.scss');
    @import url('@/assets/styles/component-styles/post.scss');
    @import url('@/assets/styles/component-styles/blog-slider.scss');
    @import url('@/assets/styles/component-styles/blog.scss');
    @import url('@/assets/styles/component-styles/contacts.scss');
</style>