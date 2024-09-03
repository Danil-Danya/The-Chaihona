<template>
    <div class="post">
        <div class="post__container">
            <router-link :to="`/post/${notation.unical_url_name}`">
                <img height="180px" :src="link + notation.image.path" alt="Preview post" class="post__img">
            </router-link>
            <div class="post__text-container">
                <p class="post__text" v-if="locale === 'rus'">{{ truncatedDesc(notation.descriptions[0].description) }}</p>
                <p class="post__text" v-if="locale === 'eng'">{{ truncatedDesc(notation.descriptions[0].description_eng) }}</p>
                <p class="post__text" v-if="locale === 'uzb'">{{ truncatedDesc(notation.descriptions[0].description_uzb) }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        locale: localStorage.getItem('locale'),
        link: import.meta.env.VITE_APP_DEFAULT_IMAGES_LINK,
    }),
    
    props: {
        notation: {
            type: Object,
            required: true
        }
    },

    methods: {
         truncatedDesc(desc) {
            const maxLength = 100;
            if (desc.length > maxLength) {
                return desc.substring(0, maxLength) + '...';
            }
            return desc;
        }
    }
}

</script>