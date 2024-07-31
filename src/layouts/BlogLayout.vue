<template>
    <div class="site">
        <header class="header">
            <Navbar />
        </header>
        <main class="main">
            <Router-view />
        </main>
        <footer class="footer">
            <Footer />
        </footer>
    </div>
</template>

<script>

import Navbar from '@/components/layouts/blog-layout/Navbar.vue';
import Footer from '@/components/layouts/Footer.vue';

export default {
    components: {
        Navbar,
        Footer
    },
}

</script>

<style lang="scss">
    @import url("@/assets/styles/layout-styles/blog-layout/navbar.scss");
    @import url("@/assets/styles/layout-styles/footer.scss");
</style>