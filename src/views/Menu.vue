<template>
    <div>
        <section class="manu__filter" style="margin-bottom: 100px">
            <Switcher />
            <SliderBar />
        </section>
        <div class="menu__component">
            <div class="container">
                <FirstDish />
                <NationsDish />
                <EuropeanDish />
                <SetDish />
                <OtherDish />
            </div>
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

export default {
    components: {
        Switcher,
        SliderBar,
        FirstDish,
        NationsDish,
        EuropeanDish,
        SetDish,
        OtherDish
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