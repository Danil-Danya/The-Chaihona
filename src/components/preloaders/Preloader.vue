<template>
    <transition name="loading">
        <div class="preloader" v-if="loading">
            <div class="preloader__сontainer">
                <div class="preloader__logo">
                    <img src="@/assets/images/navbar/logo.svg" alt="Logo" class="preloader__logo-img">
                </div>
                <div class="loader-container">
                    <div class="progress-bar">
                        <div class="progress"></div>
                    </div>
                </div>
                <div class="preloader__logo-content">
                    <h2 class="preloader__text">Загрузка контента...</h2>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    data: () => ({
        loading: true
    }),

    mounted () {
        //setTimeout(() => this.loading = false, 500);
    },

    watch: {
        $route: {
            immediate: true,
            handler(newRoute, oldRoute = {}) {
                if (newRoute.path !== oldRoute.path || JSON.stringify(newRoute.params) !== JSON.stringify(oldRoute.params)) {
                    this.loading = true;
                    setTimeout(() => this.loading = false, 300);
                }
            }
        }
    }
}

</script>