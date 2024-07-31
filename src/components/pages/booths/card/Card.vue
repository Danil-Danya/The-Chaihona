<template>
    <div class="card__container">
        <div class="card__item" v-for="(item, index) in 10" :key="item">
            <div class="card__slider">
                <Slider :index="index" />
            </div>
            <div class="card__info">
                <Info />
            </div>
        </div>
    </div>
</template>

<script>

import Slider from '@/components/pages/booths/card/Slider.vue';
import Info from '@/components/pages/booths/card/Info.vue';

export default {
    components: {
        Slider,
        Info
    },

    props: {
        notation: Array
    }
}

</script>