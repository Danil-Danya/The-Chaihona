<template>
  <component :is="layout">
    <Router-view />
  </component>
</template>

<script>
  import SiteLayout from '@/layouts/SiteLayout.vue';
  import BlogLayout from '@/layouts/BlogLayout.vue';

  export default {
    computed: {
      layout () {
        return (`${this.$route.meta.layout || 'index'}-layout`)
      }
    },

    components: {
      SiteLayout,
      BlogLayout
    },
  }
</script>

<!-- <style lang="scss">
  @import url('@/assets/styles/all.scss');
</style> -->