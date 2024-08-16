<template>
    <div class="admin__content-view">
        <Sidebar />
        <div class="container">
            <Navbar />
            <RouterView />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/layouts/Sidebar.vue';
import Navbar from '@/components/layouts/Navbar.vue';

export default {
    components: { 
        Sidebar,
        Navbar
    }
}

</script>