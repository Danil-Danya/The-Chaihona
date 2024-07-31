<template>
    <div class="blog__card">
        <div class="blog__card-images">
            <img src="@/assets/images/blog/page/blog.png" alt="Post" class="blog__card-image">
        </div>
        <div class="blog__card-content">
            <h2 class="blog__card-title">Роман Сайфулин об уходе из Makro, открытии The Choyxona, р...</h2>
            <div class="blog__card-content-info">
                <div class="blog__card-date">
                    <p class="blog__card-text">Июнь 15, 2024</p>
                </div>
                <div class="blog__card-views">
                    <span class="blog__card-icon">
                        <Views />
                    </span>
                    <p class="blog__card-text">3 567</p>
                </div>
            </div>
            <div class="blog__card-buttons">
                <router-link to="post" class="blog__card-link">Подробнее</router-link>
            </div>
        </div>
    </div>
</template>

<script>

import Views from '@/components/icons/blog/Views.vue';

export default {
    components: {
        Views
    }
}

</script>