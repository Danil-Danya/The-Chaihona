<template>
  <Loading />
  <component :is="layout">
    <Router-view />
  </component>
</template>

<script>
  import SiteLayout from '@/layouts/SiteLayout.vue';
  import BlogLayout from '@/layouts/BlogLayout.vue';
  import Loading from '@/components/preloaders/Preloader.vue';

  export default {
    computed: {
      layout () {
        return (`${this.$route.meta.layout || 'index'}-layout`)
      }
    },

    components: {
      SiteLayout,
      BlogLayout,
      Loading
    },
  }
</script>

<!-- <style lang="scss">
  @import url('@/assets/styles/all.scss');
</style> -->