<template>
    <div class="blog__card-container">
        <div class="blog__card-item" v-for="item in 10">
            <BlogCard />
        </div>
    </div>
</template>

<script>

import BlogCard from '../card/BlogCard.vue';

export default {
    components: {
        BlogCard
    }
}

</script>