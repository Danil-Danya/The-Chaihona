<template>
    <div class="slider__bar" :key="componentKey">
        <div class="slider__bar-container">
            <div class="container">
                <div class="slider__bar-content">
                    <button class="slider__bar-button-navigation slider-prev" @click="slidePrev">
                        <img src="@/assets/images/blog/slider/prev.svg" alt="Arrow">
                    </button>
                    <button class="slider__bar-button-navigation slider-next">
                        <img src="@/assets/images/blog/slider/next.svg" alt="Arrow"  @click="slideNext">
                    </button>
                    <swiper class="slider__bar-swiper"
                        :slides-per-view="slides"
                        :spaceBetween="10"
                        :loop="true"
                        :navigation="{
                            prevEl: '.slider-prev',
                            nextEl: '.slider-next',
                        }"
                        :modules="modules"
                        ref="barSwiper"
                    >
                        <swiper-slide v-for="slide in sliderDataDish" :key="slide" v-if="$route.query.menu_type === 'dish'">
                            <a :href="`/menu?menu_type=dish#${slide.hash}`" class="button__round slider__bar-button" ref="button">{{ slide.name }}</a>
                        </swiper-slide>
                        <swiper-slide v-for="slideDrinks in sliderDateDrinks" :key="slideDrinks" v-else>
                            <a :href="`/menu?menu_type=drinks#${slideDrinks.hash}`" class="button__round slider__bar-button" ref="button">{{ slideDrinks.name }}</a>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import 'swiper/css';

export default {
    data: () => ({
        slides: 6,
        componentKey: 0,
        sliderDataDish: [
            { "name": "Первые блюда", "hash": "first" },
            { "name": "Национальные блюда", "hash": "national" },
            { "name": "Европейские блюда", "hash": "europian" },
            { "name": "Ассорти и сеты", "hash": "set" },
            { "name": "Шашлыки", "hash": "shashlyki" },
            { "name": "Холодные закуски", "hash": "holodnye_zakuski" },
            { "name": "Горячие закуски", "hash": "goryachie_zakuski" },
            { "name": "Салаты", "hash": "salats" },
            { "name": "Десерты", "hash": "deserts" }
        ],
        sliderDateDrinks: [
            { "name": "Пиво", "hash": "pivo" },
            { "name": "Gin", "hash": "gin" },
            { "name": "Водка", "hash": "vodka" },
            { "name": "Rum", "hash": "rum" },
            { "name": "Виски", "hash": "viski" },
            { "name": "Tequila", "hash": "tekilla" },
            { "name": "Вино", "hash": "vino" },
            { "name": "Чай", "hash": "chay" },
            { "name": "Кофе", "hash": "coffee" },
            { "name": "Коктейли", "hash": "kokteyli" },
            { "name": "Вода", "hash": "water" },
            { "name": "Лимонады", "hash": "lemonade" },
            { "name": "Напитки", "hash": "napitki" },
        ],
    }),

    components: {
        Swiper,
        SwiperSlide,
    },

    methods: {
        slideNext() {
            this.$refs.barSwiper.swiper.slideNext();
        },
        slidePrev() {
            this.$refs.barSwiper.swiper.slidePrev();
        },

        changeSlides () {
            const width =  window.innerWidth;

            if (width < 960)
                this.slides = 3;

            if (width < 570)
                this.slides = 1.8;
        },

        reinitSwiper() {
            this.componentKey += 1;
        }
    },

    watch: {
        '$route.query': {
            handler() {
                this.reinitSwiper(); 
            },
            deep: true
        }
    },

    setup() {
        return {
             modules: [Navigation, EffectCoverflow],
        };
    },

    mounted () {
        this.changeSlides()
    }
}

</script>