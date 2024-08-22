<template>
    <section class="buths">
        <div class="buths__container">
            <div class="container">
                <div class="buths__content">
                    <h2 class="title buths__title">Приватные оазисы</h2>
                    <div class="buths__content-container">
                        <div class="buths__left">
                            <p class="buths__text"><strong>The Choyxona</strong>, расположенная в уединенном уголке центра города, напоминает закрытые беседки загородного дома, где вы можете собраться большой компанией в одной из 13 кабинок нового формата.</p>
                            <Button :notation="buttonNotation" />
                        </div>
                        <div class="buths__right">
                            <div class="buths__slider-navigation">
                                <button class="buths__slider-button slider-prev" @click="slidePrev">
                                    <img src="@/assets/images/slider/prev.svg" alt="Arrow">
                                </button>
                                <button class="buths__slider-button slider-next">
                                    <img src="@/assets/images/slider/next.svg" alt="Arrow"  @click="slideNext">
                                </button>
                            </div>
                            <div class="buths__sliders" ref="slider">
                                <Slider v-if="width > 960" />
                                <MobileSlider v-else />
                            </div>
                            <div class="buths-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Slider from './Slider.vue';
import MobileSlider from '@/components/mobile/SliderButhsIndex.vue';

export default {
    data: () => ({
        width: window.innerWidth,
    }),

    mounted () {
        this.$nextTick(() => {
            if (this.width > 1000) {
                this.$gsap.fromTo('.buths__left', {
                    opacity: 0,
                    x: -100
                }, {
                    scrollTrigger: {
                        trigger: '.buths__left',
                        start: 'top 45%',
                        end: 'center 50%',
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.5
                })
    
                this.$gsap.fromTo('.buths__right', {
                    opacity: 0,
                    x: 100
                }, {
                    scrollTrigger: {
                        trigger: '.buths__right',
                        start: 'top 45%',
                        end: 'center 50%',
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    delay: 0.3
                })
            }
        })
    },

    components: {
        Slider,
        MobileSlider
    },
}

</script>