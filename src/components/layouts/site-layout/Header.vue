<template>
    <section class="header-section">
        <div class="header__container" :class="background ? background : ''">
            <div class="header__background-dark"></div>
            <div class="container">
                <div class="header__content">
                    <h1 class="header__title">{{ title }}</h1>
                    <p class="header__description">{{ description }}</p>
                    <div class="header__button-container">
                        <a :href="button.path" class="header__button-link" v-for="button in buttons" :key="button">
                            <button class="header__button" :class="button.bordered ? 'header__bordered' : ''">{{ button.text }}</button>
                        </a>
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
        buttons: [{}],
    }),
    
    methods: {
        updateHeader() {
            const page = this.$route.name;

            this.title = headerData[page].title;
            this.description = headerData[page].description;
            this.buttons = headerData[page].buttons;
            this.background = headerData[page].background;
        },

        animateHeader () {
            this.$gsap.fromTo('.header__title', {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                delay: 0.2
            })

            this.$gsap.fromTo('.header__description', {
                opacity: 0,
                x: -50
            }, {
                opacity: 1,
                x: 0,
                duration: 0.3,
                delay: 0.7
            })

            this.$gsap.fromTo('.header__button-container', {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                delay: 1.2
            })
        }
    },

    mounted () {
        this.updateHeader();
        
        setTimeout(() => {
            this.animateHeader();
        }, 500)
    },

    watch: {
        '$route.name': {
            deep: true,
            handler () {
                this.updateHeader();
                 setTimeout(() => {
                    this.animateHeader();
                }, 500)
            }
        }
    },
}

</script>