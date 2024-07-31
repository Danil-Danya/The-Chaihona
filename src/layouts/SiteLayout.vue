<template>
    <div class="site">
        <header class="header">
            <Navbar />
            <Header />
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

import Header from '@/components/layouts/site-layout/Header.vue';
import Navbar from '@/components/layouts/site-layout/Navbar.vue';
import Footer from '@/components/layouts/Footer.vue';

export default {
    components: {
        Header,
        Navbar,
        Footer
    },
}

</script>

<style lang="scss" >
    @import url("@/assets/styles/layout-styles/site-layout/navbar.scss");
    @import url("@/assets/styles/layout-styles/site-layout/header.scss");
    @import url("@/assets/styles/layout-styles/footer.scss");
</style>