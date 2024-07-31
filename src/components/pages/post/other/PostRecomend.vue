<template>
    <section class="post-recomend">
        <h2 class="post__recomend-title">Другие статьи автора</h2>
        <div class="post__recomend-container">
            <div class="post__recomend-item" v-for="item in testData" :key="item">
                <div class="post__recomend-image">
                    <div class="post__recomend-bg"></div>
                    <img :src="item.img" alt="Post" class="post__recomend-image">
                </div>
                <div class="post__recomend-content">
                    <h3 class="post__recomend-title-blog">{{ item.title }}</h3>
                    <div class="post__data">
                        <p class="post__recomend-date">{{ item.date }}</p>
                        <router-link to="/post" class="post__recomend-link">Подробнее</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>



export default {
    data: () => ({
        testData: [
            {
                img: require('@/assets/images/post/test-blog/test1.png'),
                title: 'Роман Сайфулин об уходе из Makro, открытии The Choyxona',
                date: '24.06.2024 г.',
            },
            {
                img: require('@/assets/images/post/test-blog/test2.png'),
                title: 'Роман Сайфулин об уходе из Makro, открытии The Choyxona',
                date: '24.06.2024 г.',
            },
            {
                img: require('@/assets/images/post/test-blog/test3.png'),
                title: 'Роман Сайфулин об уходе из Makro, открытии The Choyxona',
                date: '24.06.2024 г.',
            },
        ]
    })
}

</script>