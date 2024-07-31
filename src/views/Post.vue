<template>
    <div class="post-blog">
        <PostContent />
        <Blog />
    </div>
</template>

<script>
import PostContent from '@/components/pages/post/PostContent.vue';
import Blog from '@/components/pages/post/Blog.vue';

export default {
    components: {
        PostContent,
        Blog
    }
}

</script>

<style lang="scss">
    @import url('@/assets/styles/page-styles/post/post.scss');
    @import url('@/assets/styles/page-styles/post/post-info.scss');
    @import url('@/assets/styles/page-styles/post/post-video.scss');
    @import url('@/assets/styles/page-styles/post/post-recomend.scss');
    @import url('@/assets/styles/component-styles/post.scss');
    @import url('@/assets/styles/component-styles/blog.scss');
    @import url('@/assets/styles/component-styles/blog-slider.scss');
</style>
