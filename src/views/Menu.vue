<template>
    <div>
        <section class="manu__filter" style="margin-bottom: 100px">
            <Switcher />
            <SliderBar />
        </section>
        <div class="menu__component">
            <transition name="fade" :duration="300">
                <div class="container" v-if="$route.query.menu_type === 'dish'">
                    <FirstDish />
                    <NationsDish />
                    <EuropeanDish />
                    <SetDish />
                    <OtherDish />
                </div>
            </transition>
            <transition name="fade" :duration="300">
                <div class="container" v-if="$route.query.menu_type === 'drinks'">
                    <BearAndVodka />
                    <OtherBarDrinks />
                    <KognackAndTequilla />
                    <Vine />
                    <CoffeAndTea />
                    <WaterAndDrinks />
                    <LimonadeAndCoctale />
                </div>
            </transition>
        </div>
    </div>
</template>

<script>

import Switcher from '@/components/pages/menu/Switcher.vue';
import SliderBar from '@/components/pages/menu/SliderBar.vue';
import FirstDish from '@/components/pages/menu/menu_categories/FirstDish.vue';
import NationsDish from '@/components/pages/menu/menu_categories/NationsDish.vue';
import EuropeanDish from '@/components/pages/menu/menu_categories/EuropeanDish.vue';
import SetDish from '@/components/pages/menu/menu_categories/SetDish.vue';
import OtherDish from '@/components/pages/menu/menu_categories/OtherDish.vue';
import BearAndVodka from '@/components/pages/menu/menu_categories/BearAndVodka.vue';
import OtherBarDrinks from '@/components/pages/menu/menu_categories/OtherBarDrinks.vue';
import Vine from '@/components/pages/menu/menu_categories/Vine.vue';
import CoffeAndTea from '@/components/pages/menu/menu_categories/CofeeAndTea.vue'
import WaterAndDrinks from '@/components/pages/menu/menu_categories/WaterAndDrinks.vue';
import LimonadeAndCoctale from '@/components/pages/menu/menu_categories/LimonadeAndCoctale.vue';
import KognackAndTequilla from '@/components/pages/menu/menu_categories/KognackAndTequilla.vue';

export default {
    components: {
        Switcher,
        SliderBar,
        FirstDish,
        NationsDish,
        EuropeanDish,
        SetDish,
        OtherDish,
        BearAndVodka,
        OtherBarDrinks,
        Vine,
        CoffeAndTea,
        WaterAndDrinks,
        LimonadeAndCoctale,
        KognackAndTequilla
    },

    mounted () {
        document.title = 'Меню чайхоны'
    }
}

</script>

<style lang="scss">
    @import url('@/assets/styles/page-styles/menu/switcher.scss');
    @import url('@/assets/styles/page-styles/menu/slider-bar.scss');
    @import url('@/assets/styles/page-styles/menu/menu-list.scss');
    @import url('@/assets/styles/page-styles/menu/menu-card.scss');
    @import url('@/assets/styles/page-styles/menu/menu-image.scss')
</style>