<template>
    <div class="blog__card-top-container">
        <form class="blog__card-top-form">
            <input type="text" class="blog__card-top-input" placeholder="Найти статью">
        </form>
        <div class="blog__card-top-posts">
            <h2 class="blog__card-top-title">Топ статьи</h2>
            <div class="blog__card-top-item" v-for="item in 3" :key="item">
                <BlogTopCard />
            </div>
        </div>
        <div class="blog__card-top-social">
            <h2 class="blog__card-top-title">Следите за новостями</h2>
            <div class="blog__card-top-icon-container">
                <router-link to="" v-for="social in socialList" :key="social">
                    <component :is="social"></component>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import BlogTopCard from '../card/BlogTopCard.vue';
import Facebook from '@/components/icons/social/Facebook.vue';
import Instagram from '@/components/icons/social/Instagram.vue';
import Telegram from '@/components/icons/social/Telegram.vue';

export default {
    data: () => ({
        socialList: ['Facebook', 'Telegram', 'Instagram']
    }),

    components: {
        BlogTopCard,
        Facebook,
        Instagram,
        Telegram
    }
}

</script>