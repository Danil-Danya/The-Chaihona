<template>
    <section class="menu">
        <div class="menu__container">
            <div class="container">
                <div class="menu__ornament-container">
                    <Ornament :class="`menu__ornament-${ornament}`" v-for="ornament in 2" :key="ornament" />
                </div>
                <div class="menu__set-content">
                    <h2 class="title menu__set-title">{{ $t('index.menu.title') }}</h2>
                </div>
            </div>
            <div class="menu__set" ref="container">
                <div class="menu__set-item" v-for="item in setList" :key="item" ref="menuItem">
                    <img :src="item.img" alt="Menu" class="menu__set-item-img">
                    <div class="menu__set-item-backround"></div>
                    <router-link :to="item.path" class="menu__set-item-link">
                        <p class="menu__set-item-text">{{ item.text }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Ornament from '@/components/icons/notfound/OrnamentLeft.vue'

export default {
    components: {
        Ornament
    },

    data: () => ({
        setList: [
            {
                img: require('@/assets/images/menu/set1.png'),
                path: '/menu?menu_type=dish#first',
                text: 'Первые блюда'
            },
            {
                img: require('@/assets/images/menu/set2.png'),
                path: '/menu?menu_type=dish#national',
                text: 'Вторые блюда'
            },
            {
                img: require('@/assets/images/menu/set3.png'),
                path: '/menu?menu_type=dish#shashlyki',
                text: 'Шашлыки'
            },
            {
                img: require('@/assets/images/menu/set4.png'),
                path: '/menu?menu_type=dish#deserts',
                text: 'Десерты'
            },
        ]
    }),

    methods: {
        changeMenuSize () {
            const documentWidth = window.innerWidth;

            const menuItem = this.$refs.menuItem;
            const container = this.$refs.container;

            if (documentWidth > 960) {
                menuItem.forEach(item => {
                    item.style.width = container.clientWidth / menuItem.length + 'px';
                    item.style.height = container.clientWidth / menuItem.length + 'px';
                });
            }
        }
    },

    mounted () {
        this.$nextTick(() => {
            this.changeMenuSize();
            this.setList.forEach((item, index) => {
                item.text = this.$i18n.messages[localStorage.getItem('locale')]
                                .index.menu.cards[index];
            });


            if (window.innerWidth < 1000) {
                this.$gsap.utils.toArray('.menu__set-item').forEach((item, index) => {
                    this.$gsap.fromTo(item, {
                        opacity: 0,
                        y: 150,
                    }, {
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 90%',
                            end: 'bottom 60%',
                        },
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                    });
                });
            }
        })
        window.addEventListener('resize', () => this.changeMenuSize());
    }
}

</script>