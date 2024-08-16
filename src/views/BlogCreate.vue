<template>
    <div class="product-add create-container">
        <div class="create">
            <PostHeaderCreate />
            <PostFormCreate />
        </div>
    </div>
</template>

<script>
import PostFormCreate from '@/components/pages/post-create/PostFormCreate.vue';
import PostHeaderCreate from '@/components/pages/post-create/PostHeaderCreate.vue';

export default {
    components: {
        PostFormCreate,
        PostHeaderCreate
    },
    mounted () {
        document.title = 'Создание поста';
    }
}
</script>