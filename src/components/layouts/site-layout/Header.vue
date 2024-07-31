<template>
    <section class="header-section">
        <div class="header__container" :class="background ? background : ''">
            <div class="header__background-dark"></div>
            <div class="container">
                <div class="header__content">
                    <h1 class="header__title">{{ title }}</h1>
                    <p class="header__description">{{ description }}</p>
                    <div class="header__button-container">
                        <router-link :to="button" v-for="button in buttons" :key="button">
                            <button class="header__button" :class="button.bordered ? 'header__bordered' : ''">{{ button.text }}</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import headerData from '@/state/header_data.json';

export default {
    data: () => ({
        title: '',
        description: '',
        buttons: [{}]
    }),
    
    methods: {
        updateHeader() {
            const page = this.$route.name;

            this.title = headerData[page].title;
            this.description = headerData[page].description;
            this.buttons = headerData[page].buttons;
            this.background = headerData[page].background;
        }
    },

    mounted () {
        this.updateHeader();
    },

    watch: {
        '$route.name': 'updateHeader'
    },
}

</script>