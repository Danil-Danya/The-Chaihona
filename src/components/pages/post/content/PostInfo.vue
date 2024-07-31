<template>
    <section class="post-info">
        <h1 class="post__info-title">Роман Сайфулин об уходе из Makro, открытии The Choyxona ресторане на берегу моря за $1 млн и мечтах о бане</h1>
        <div class="post__statistic">
            <div class="post__date">
                <p class="post__statistic-text">Июнь 15, 2024</p>
                <p class="post__statistic-text">16:45</p>
            </div>
            <div class="post__views">
                <View />
                <p class="post__statistic-text">476</p>
            </div>
        </div>
        <div class="post__image">
            <img src="@/assets/images/post/author.png" alt="Image" class="post__image-img">
        </div>
        <div class="post__paragraphs">
            <p class="post__paragraphs-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="post__paragraphs-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </section>
</template>

<script>

import View from '@/components/icons/post/View.vue';

export default {
    components: {
        View
    }
}

</script>