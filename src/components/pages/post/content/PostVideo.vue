<template>
    <section class="post-video" v-if="post.videos && post.videos.length > 0">
        <h2 class="post__default-title">{{ $t('blog.video') }}</h2>
        <div class="post__video" 
         v-if="post.videos && post.videos.length > 0"
         v-html="post.videos[0].HTML_code"
        >
            
        </div>
        <span class="post__video-line"></span>
        <!-- <div class="post__others">
            <div class="post__others-item" v-for="item in test" :key="item">
                <Video class="post__video-icon"/>
                <p class="post__others-text">{{ item }}</p>
            </div>
        </div> -->
    </section>
</template>

<script>

import Video from '@/components/icons/post/Video.vue'

export default {
    data: () => ({
        video: ''
    }),
    components: {
        Video
    },

    props: {
        post: {
            type: Object,
            required: true
        }
    },

    // mounted () {
    //     this.$nextTick(() => {
    //         this.video = this.post.videos
    //     })
    // }
}


</script>