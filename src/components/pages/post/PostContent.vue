<template>
    <div class="container">
        <div class="post-container">
            <div class="post-content">
                <PostInfo />
                <PostVideo />
            </div>
            <div class="post-recs">
                <PostRecomend />
            </div>
        </div>
    </div>
</template>

<script>

import PostInfo from './content/PostInfo.vue';
import PostRecomend from './other/PostRecomend.vue';
import PostVideo from './content/PostVideo.vue';

export default {
    components: {
        PostInfo,
        PostRecomend,
        PostVideo
    }
}

</script>