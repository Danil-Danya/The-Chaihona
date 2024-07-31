<template>
    <section class="post-video">
        <h2 class="post__default-title">Видео-версия статьи</h2>
        <div class="post__video">
            <iframe width="100%" height="500px" class="post-video-youtube" src="https://www.youtube.com/embed/B3rBHnS6DRo" title="Плов как искусство: масштабы бизнеса в Ташкенте" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="post__others">
            <div class="post__others-item" v-for="item in test" :key="item">
                <Video />
                <p class="post__others-text">{{ item }}</p>
            </div>
        </div>
    </section>
</template>

<script>

import Video from '@/components/icons/post/Video.vue'

export default {
    data: () => ({
        test: [
            'Абылайхан и Диана Камаладины: о бизнесе в соцсетях, образовании и факапах блогеров',
            'Абылайхан и Диана Камаладины: о бизнесе в соцсетях, образовании и факапах блогеров',
            'Абылайхан и Диана Камаладины: о бизнесе в соцсетях, образовании и факапах блогеров',
            'Абылайхан и Диана Камаладины: о бизнесе в соцсетях, образовании и факапах блогеров',
        ]
    }),
    components: {
        Video
    }
}


</script>