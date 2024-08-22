<template>
    <div class="card__container" v-if="notation.length > 0">
        <div class="card__item" v-for="(item, index) in notation" :key="item">
            <div class="card__slider">
                <Slider :index="index" :slide="item" />
            </div>
            <div class="card__info">
                <Info :item="item" />
            </div>
        </div>
    </div>
    <div class="card__text" v-else>
        <h2 class="content__alert" style="font-size: 25px">К сожалению подхлдящие кабинки небыли найдены</h2>
    </div>
</template>

<script>
import Slider from '@/components/pages/booths/card/Slider.vue';
import Info from '@/components/pages/booths/card/Info.vue';

export default {
    data: () => ({
        buths: [],
    }),

    components: {
        Slider,
        Info
    },

    props: {
        notation: { 
            type: Array,
            required: true
        }
    },

    methods: {
        animateBuths () {
            const boxes = this.$gsap.utils.toArray('.card__item');

            if (window.innerWidth < 1000) {
                boxes.forEach((item, index) => {
                    this.$gsap.fromTo(item, {
                        opacity: 0,
                        y: 150,
                    }, {
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 90%',
                            end: 'bottom 60%',
                            toggleActions: 'play none none none',
                        },
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                    });
                });
            }
        }
    },

    mounted () {
        setTimeout(() => {
            console.log(this.notation);
            
            this.animateBuths();
        }, 500);
    }
}

</script>