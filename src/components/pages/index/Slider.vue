<template>
    <swiper ref="buthsSwiper"
        :effect="'coverflow'"
        :direction="'vertical'"
        :slides-per-view="3"
        :loop="true"
        :navigation="{
            prevEl: '.slider-prev',
            nextEl: '.slider-next',
        }"
        :coverflowEffect="{
            rotate: 0,
            scale: 0.8,
            modifier: 1,
            depth: 0,
            slideShadows: false,
        }"
        :modules="modules"
        class="buths__slider"
    >
        <swiper-slide v-for="slide in slides" :key="slide">
            <div class="buths__item">
                <div class="buths__img-container">
                    <img :src="link + slide.images[0].path" alt="Slider Image" class="buths__item-img">
                </div>
                <div class="buths__item-content">
                    <div class="buths__item-content-container">
                        <h3 class="buths__item-title" v-if="locale === 'rus'">{{ slide.title }}</h3>
                        <h3 class="buths__item-title" v-if="locale === 'eng'">{{ slide.title_eng }}</h3>
                        <h3 class="buths__item-title" v-if="locale === 'uzb'">{{ slide.title_uzb }}</h3>
                        <p class="buths__item-text" v-if="locale === 'rus'">{{ slide.descriptions[0].description_unit }}</p>
                        <p class="buths__item-text" v-if="locale === 'eng'">{{ slide.descriptions[0].description_unit_eng }}</p>
                        <p class="buths__item-text" v-if="locale === 'uzb'">{{ slide.descriptions[0].description_unit_uzb }}</p>
                    </div>
                    <div class="buths__button-container">
                        <a href="https://n745883.alteg.io/company/702167/personal/select-master?api_key=zna3an7p3yq13vqfny0k&o=m-1&companyId=702167" class="button">{{ $t('buttonNotation.text') }}</a>
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
import { Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import 'swiper/css';
//import 'swiper/css/pagination';

export default {
    data: () => ({
        locale: localStorage.getItem('locale'),
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

    computed: {
        ...mapGetters(['getBuths']),
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

     setup() {
        return {
            modules: [Navigation, EffectCoverflow],
        };
    },

    async mounted () {
        const params = {
            limit: 10
        }

        await this.fetchBuths(params);
        this.slides = this.getBuths.rows;
    }
}
</script>