<template>
    <div class="blog__container">
        <div class="container">
            <h1 class="title blog__title">Актуальные статьи</h1>
            <div class="blog__content-page">
                <Blog />
                <PopularBlog />
            </div>
            <div class="blog__card-pagination">
                <button class="button">Загрузить еще</button>
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