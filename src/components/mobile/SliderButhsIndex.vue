<template>
    <swiper ref="mobileSlider"
        :loop="true"
        :slidesPerView="1"
        :space-between="15"
        :autoplay="{ delay: 3000 }"
        :navigation="{
            prevEl: '.slider-prev',
            nextEl: '.slider-next',
        }"
        :pagination="{ 
            el: '.buths-pagination',
            clickable: true,
        }"
        :modules="modules"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="buths__slider-mobile"
    >
        <swiper-slide class="buths__item-mobile" v-for="slide in slides" :key="slide">
            <div class="buths__item">
                <div class="buths__img-container">
                    <img :src="link + slide.images[0].path" alt="Slider Image" class="buths__item-img">
                </div>
                <div class="buths__item-content">
                    <div class="buths__item-content-container">
                        <h3 class="buths__item-title">{{ slide.title }}</h3>
                        <p class="buths__item-text">{{ slide.descriptions[0].description_unit }}</p>
                    </div>
                    <div class="buths__button-container">
                        <a href="https://n745883.alteg.io/company/702167/personal/select-master?api_key=zna3an7p3yq13vqfny0k&o=m-1&companyId=702167" class="button">Забронировать</a>
                        <!-- <Button :notation="buttonBorderedNotation" /> -->
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Button from "@/components/reused/Button.vue";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
    data: () => ({
        buttonBorderedNotation: {
            text: '360° тур',
            path: '',
            bordered: true,
        },

        buttonNotation: {
            text: 'Забронировать',
            path: ''
        },

        link: import.meta.env.VITE_APP_DEFAULT_IMAGES_LINK,

        slides: []
    }),

    components: {
        Swiper,
        SwiperSlide,
        Button
    },
    
    methods: {
        ...mapActions(['fetchBuths']),

        slideNext() {
            this.$refs.buthsSwiper.swiper.slideNext();
        },
        slidePrev() {
            this.$refs.buthsSwiper.swiper.slidePrev();
        }
    },

    computed: {
        ...mapGetters(['getBuths']),
    },

    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Autoplay],
        };
    },

    async mounted () {
        const params = {
            limit: 5
        }

        await this.fetchBuths(params);
        this.slides = this.getBuths.rows;
    }
}
</script>