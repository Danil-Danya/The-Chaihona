<template>
    <div class="admin">
        <component :is="componet">
            <Router-view />
        </component>
    </div>
</template>

<script>

import LoginLayout from './layouts/LoginLayout.vue';
import CreateLayout from './layouts/CreateLayout.vue';
import ViewLayout from './layouts/ViewLayout.vue';

export default {
    components: {
        LoginLayout,
        CreateLayout,
        ViewLayout
    },

    computed: {
        componet () {
            return (`${ this.$route.meta.layout || 'login' }-layout`);
        }
    }
}

</script>