<template>
    <div class="blog">
        <PostAdd />
        <PostTable />
    </div>
</template>

<script>

import PostAdd from '@/components/pages/post-view/PostAdd.vue';
import PostTable from '@/components/pages/post-view/PostTable.vue';

export default {
    components: {
        PostAdd,
        PostTable
    },

    mounted () {
        document.title = 'Список постов';
    }
}
</script>