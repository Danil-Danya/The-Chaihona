<template>
    <div class="blog__container">
        <div class="container">
            <h1 class="title blog__title">{{ $t('blog.title') }}</h1>
            <div class="blog__content-page">
                <Blog />
                <PopularBlog />
            </div>
        </div>
    </div>
</template>

<script>

import Blog from './content/Blog.vue';
import PopularBlog from './content/PopularBlog.vue';

export default {
    components: {
        Blog,
        PopularBlog
    }
}

</script>