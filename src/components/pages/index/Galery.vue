<template>
    <section class="galery">
        <div class="galery__container">
            <div class="container">
                <div class="galery__content">
                    <div class="galery__grid">
                        <div class="galery__item" v-for="(img, index) in imagesList" :key="img">
                            <img :src="img" alt="Photo" class="galery__item-img" @click="toggleZoom(index)">
                            <transition name="fade">
                                <ZoomImagePopup :image="img" @toggleZoom="toggleZoom" v-if="zoom && image === index"/>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import ZoomImagePopup from '@/components/reused/popup/ZoomImagePopup.vue';

export default {
    data: () => ({
        imagesList: [
            require('@/assets/images/galery/galery1.png'),
            require('@/assets/images/galery/galery5.png'),
            require('@/assets/images/galery/galery6.png'),
            require('@/assets/images/galery/galery2.png'),
            require('@/assets/images/galery/galery3.png'),
            require('@/assets/images/galery/galery4.png'),
        ],
        zoom: false,
        image: -1
    }),

    components: {
        ZoomImagePopup
    },

    methods: {
        toggleZoom (index) {
            this.image = index > -1 ? index : -1;
            this.zoom = !this.zoom; 
        }
    }
}

</script>