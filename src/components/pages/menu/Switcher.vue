<template>
    <div class="switcher">
        <div class="switcher__container">
            <div class="container">
                <div class="switcher__content">
                    <div class="switcher__button-container">
                        <button class="switcher__button" ref="defaultButton" @click="switchMenuTypeFilter('default')">
                            <HotDishes />
                            <p class="switcher__text">Основное меню</p>
                        </button>
                        <button class="switcher__button" ref="drinkButton" @click="switchMenuTypeFilter('drinks')">
                            <IceDrink />
                            <p class="switcher__text">Барное меню</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import HotDishes from '@/components/icons/menu/HotDishes.vue';
import IceDrink from '@/components/icons/menu/IceDrinks.vue';

export default {
    components: {
        HotDishes,
        IceDrink
    },

    methods: {
        setDefaultMenuTypeFilter () {
            if (!this.$route.query.menu_type) {
                this.$router.push({ query: { ...this.$route.query, menu_type: 'default' } });
            }
        },

        switchMenuTypeFilter (button) {
            this.$router.push({ query: { ...this.$route.query, menu_type: button } });
        },

        setStyleForActiveButton () {
            const filter = this.$route.query.menu_type;

            const defaultButton = this.$refs.defaultButton;
            const drinkButton = this.$refs.drinkButton;

            defaultButton.classList.remove('switcher-active');
            drinkButton.classList.remove('switcher-active');

            if (filter === 'default') {
                defaultButton.classList.add('switcher-active');
            }

            if (filter === 'drinks') {
                drinkButton.classList.add('switcher-active');
            }
        }
    },

    watch: {
        '$route.query.menu_type': {
            deep: true,
            handler () {
                this.setDefaultMenuTypeFilter();
                this.setStyleForActiveButton();
            }
        }
    },

    mounted () {
        this.setDefaultMenuTypeFilter();
        this.setStyleForActiveButton();
    }
}

</script>