<template>
    <div>
        <section class="manu__filter" style="margin-bottom: 100px">
            <Switcher />
            <SliderBar />
        </section>
        <div class="menu__component" v-for="category in testDataSet" :key="category">
            <MenuCard  :category="category"/>
        </div>
    </div>
</template>

<script>

import Switcher from '@/components/pages/menu/Switcher.vue';
import SliderBar from '@/components/pages/menu/SliderBar.vue';
import MenuCard from '@/components/pages/menu/card/MenuCard.vue';

export default {
    data: () => ({
        testDataSet: [
            {
                idAnchor: 'onece',
                isResversed: false,
                categories: {
                    title: "Первые блюда",
                    image: require('@/assets/images/menu/categories/pervye.png'),
                },
                dishes: [
                    {title: 'Мастава', price: '45.000', desctiption: 'говядина, картофель, лук, морковь, репа, болгарский перец, рис, кислое молоко, специи, зелень', time: '3 часа'},
                    {title: 'Чучвара с острой подливой', price: '55.000', desctiption: 'Маленькие пельмени из говядины', time: '20 минут'},
                    {title: 'Мампар', price: '35.000', desctiption: 'Маленькие пельмени из говядины', time: '20 минут'},
                    {title: 'Грибной крем-суп', price: '20.000', desctiption: 'говядина, тесто, лук, капуста, перец “калифорния”, яйцо, специи, зелень', time: '20 минут'},
                    {title: 'Куриная лапша', price: '65.000', desctiption: 'куриное филе, лапша, морковь, перепелиное яйцо', time: '20 минут'},
                    {title: 'Чучвара с острой подливой', price: '70.000', desctiption: 'говядина, картофель, лук, морковь, репа, болгарский перец, рис, кислое молоко, специи, зелень', time: '3 часа'},
                    {title: 'Мастава', price: '55.000', desctiption: 'говядина, картофель, лук, морковь, репа, болгарский перец, рис, кислое молоко, специи, зелень', time: '3 часа'},
                ]
            },
            {
                idAnchor: 'onece',
                isResversed: true,
                categories: {
                    title: "Национальные блюда",
                    reversed: true,
                    image: require('@/assets/images/menu/categories/nacional.png'),
                },
                dishes: [
                    {title: 'Мастава', price: '45.000', desctiption: 'говядина, картофель, лук, морковь, репа, болгарский перец, рис, кислое молоко, специи, зелень', time: '3 часа'},
                    {title: 'Чучвара с острой подливой', price: '55.000', desctiption: 'Маленькие пельмени из говядины', time: '20 минут'},
                    {title: 'Мампар', price: '35.000', desctiption: 'Маленькие пельмени из говядины', time: '20 минут'},
                    {title: 'Грибной крем-суп', price: '20.000', desctiption: 'говядина, тесто, лук, капуста, перец “калифорния”, яйцо, специи, зелень', time: '20 минут'},
                    {title: 'Куриная лапша', price: '65.000', desctiption: 'куриное филе, лапша, морковь, перепелиное яйцо', time: '20 минут'},
                    {title: 'Чучвара с острой подливой', price: '70.000', desctiption: 'говядина, картофель, лук, морковь, репа, болгарский перец, рис, кислое молоко, специи, зелень', time: '3 часа'},
                    {title: 'Мастава', price: '55.000', desctiption: 'говядина, картофель, лук, морковь, репа, болгарский перец, рис, кислое молоко, специи, зелень', time: '3 часа'},
                ]
            },
            {
                idAnchor: 'onece',
                isResversed: false,
                categories: {
                    title: "Европейские блюда",
                    image: require('@/assets/images/menu/categories/europian.png'),
                },
                dishes: [
                    {title: 'Мастава', price: '45.000', desctiption: 'говядина, картофель, лук, морковь, репа, болгарский перец, рис, кислое молоко, специи, зелень', time: '3 часа'},
                    {title: 'Чучвара с острой подливой', price: '55.000', desctiption: 'Маленькие пельмени из говядины', time: '20 минут'},
                    {title: 'Мампар', price: '35.000', desctiption: 'Маленькие пельмени из говядины', time: '20 минут'},
                    {title: 'Грибной крем-суп', price: '20.000', desctiption: 'говядина, тесто, лук, капуста, перец “калифорния”, яйцо, специи, зелень', time: '20 минут'},
                    {title: 'Куриная лапша', price: '65.000', desctiption: 'куриное филе, лапша, морковь, перепелиное яйцо', time: '20 минут'},
                    {title: 'Чучвара с острой подливой', price: '70.000', desctiption: 'говядина, картофель, лук, морковь, репа, болгарский перец, рис, кислое молоко, специи, зелень', time: '3 часа'},
                    {title: 'Мастава', price: '55.000', desctiption: 'говядина, картофель, лук, морковь, репа, болгарский перец, рис, кислое молоко, специи, зелень', time: '3 часа'},
                ]
            },
            {
                idAnchor: 'onece',
                isResversed: false,
                categories: {
                    title: "Европейские блюда",
                },
                dishes: [
                    {title: 'Мастава', price: '45.000',},
                    {title: 'Чучвара с острой подливой', price: '55.000',},
                    {title: 'Мампар', price: '35.000',},
                    {title: 'Грибной крем-суп', price: '20.000',},
                    {title: 'Куриная лапша', price: '65.000',},
                    {title: 'Чучвара с острой подливой', price: '70.000', },
                    {title: 'Мастава', price: '55.000',},
                ]
            },
            {
                idAnchor: 'onece',
                isResversed: false,
                categories: {
                    title: "Европейские блюда",
                },
                dishes: [
                    {title: 'Мастава', price: '45.000',},
                    {title: 'Чучвара с острой подливой', price: '55.000',},
                    {title: 'Мампар', price: '35.000',},
                    {title: 'Грибной крем-суп', price: '20.000',},
                    {title: 'Куриная лапша', price: '65.000',},
                    {title: 'Чучвара с острой подливой', price: '70.000', },
                    {title: 'Мастава', price: '55.000',},
                ]
            },
            {
                idAnchor: 'onece',
                isResversed: false,
                categories: {
                    title: "Европейские блюда",
                },
                dishes: [
                    {title: 'Мастава', price: '45.000',},
                    {title: 'Чучвара с острой подливой', price: '55.000',},
                    {title: 'Мампар', price: '35.000',},
                    {title: 'Грибной крем-суп', price: '20.000',},
                    {title: 'Куриная лапша', price: '65.000',},
                    {title: 'Чучвара с острой подливой', price: '70.000', },
                    {title: 'Мастава', price: '55.000',},
                ]
            },
            {
                idAnchor: 'onece',
                isResversed: false,
                categories: {
                    title: "Европейские блюда",
                },
                dishes: [
                    {title: 'Мастава', price: '45.000', desctiption: 'говядина, картофель, лук, морковь, репа, болгарский перец, рис, кислое молоко, специи, зелень', time: '3 часа'},
                    {title: 'Чучвара с острой подливой', price: '55.000', desctiption: 'Маленькие пельмени из говядины', time: '20 минут'},
                    {title: 'Мампар', price: '35.000', desctiption: 'Маленькие пельмени из говядины', time: '20 минут'},
                    {title: 'Грибной крем-суп', price: '20.000', desctiption: 'говядина, тесто, лук, капуста, перец “калифорния”, яйцо, специи, зелень', time: '20 минут'},
                    {title: 'Куриная лапша', price: '65.000', desctiption: 'куриное филе, лапша, морковь, перепелиное яйцо', time: '20 минут'},
                    {title: 'Чучвара с острой подливой', price: '70.000', desctiption: 'говядина, картофель, лук, морковь, репа, болгарский перец, рис, кислое молоко, специи, зелень', time: '3 часа'},
                    {title: 'Мастава', price: '55.000', desctiption: 'говядина, картофель, лук, морковь, репа, болгарский перец, рис, кислое молоко, специи, зелень', time: '3 часа'},
                ]
            },
            {
                idAnchor: 'onece',
                isResversed: false,
                categories: {
                    title: "Европейские блюда",
                },
                dishes: [
                    {title: 'Мастава', price: '45.000',},
                    {title: 'Чучвара с острой подливой', price: '55.000',},
                    {title: 'Мампар', price: '35.000',},
                    {title: 'Грибной крем-суп', price: '20.000',},
                    {title: 'Куриная лапша', price: '65.000',},
                    {title: 'Чучвара с острой подливой', price: '70.000', },
                    {title: 'Мастава', price: '55.000',},
                ]
            },
        ],
    }),

    components: {
        Switcher,
        SliderBar,
        MenuCard
    },
}

</script>

<style lang="scss">
    @import url('@/assets/styles/page-styles/menu/switcher.scss');
    @import url('@/assets/styles/page-styles/menu/slider-bar.scss');
    @import url('@/assets/styles/page-styles/menu/menu-list.scss');
    @import url('@/assets/styles/page-styles/menu/menu-card.scss');
    @import url('@/assets/styles/page-styles/menu/menu-image.scss')
</style>