<template>
    <section class="blog">
        <BlogContent />
    </section>
</template>

<script>

import BlogContent from '@/components/pages/blog/BlogContent.vue';

export default {
    components: {
        BlogContent
    },

    mounted () {
        document.title = 'The Choyhona - блог'
    }
}

</script>

<style lang="scss">
    @import url('@/assets/styles/page-styles/blog/card.scss');
    @import url('@/assets/styles/page-styles/blog/content.scss');
    @import url('@/assets/styles/page-styles/blog/recomendation.scss');
</style>