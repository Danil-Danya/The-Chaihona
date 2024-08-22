<template>
    <div class="site">
        <header class="header">
            <Navbar />
        </header>
        <main class="main">
            <keep-alive :exclude="['PostInfo']">
                <Router-view />
            </keep-alive>
        </main>
        <footer class="footer">
            <Footer />
        </footer>
    </div>
</template>

<script>

import Navbar from '@/components/layouts/blog-layout/Navbar.vue';
import Footer from '@/components/layouts/Footer.vue';
import MobileNavbar from '@/components/layouts/MobileNavbar.vue';

export default {
    components: {
        Navbar,
        Footer,
        MobileNavbar
    },
}

</script>

<style lang="scss">
    @import url("@/assets/styles/layout-styles/blog-layout/navbar.scss");
    @import url("@/assets/styles/layout-styles/footer.scss");
</style>