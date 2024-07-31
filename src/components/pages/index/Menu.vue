<template>
    <section class="menu">
        <div class="menu__container">
            <div class="container">
                <div class="menu__set-content">
                    <h2 class="title menu__set-title">Откройте для себя новые вкусы ваших любимых блюд</h2>
                </div>
            </div>
            <div class="menu__set" ref="container">
                <div class="menu__set-item" v-for="item in setList" :key="item" ref="menuItem">
                    <img :src="item.img" alt="Menu" class="menu__set-item-img">
                    <div class="menu__set-item-backround"></div>
                    <router-link to="" class="menu__set-item-link">
                        <p class="menu__set-item-text">{{ item.text }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data: () => ({
        setList: [
            {
                img: require('@/assets/images/menu/set.png'),
                path: '',
                text: 'Первые блюда'
            },
            {
                img: require('@/assets/images/menu/set.png'),
                path: '',
                text: 'Вторые блюда'
            },
            {
                img: require('@/assets/images/menu/set.png'),
                path: '',
                text: 'Шашлыки'
            },
            {
                img: require('@/assets/images/menu/set.png'),
                path: '',
                text: 'Десерты'
            },
        ]
    }),

    methods: {
        changeMenuSize () {
            const menuItem = this.$refs.menuItem;
            const container = this.$refs.container;

            console.log(213);

            menuItem.forEach(item => {
                item.style.width = container.clientWidth / menuItem.length + 'px';
                item.style.height = container.clientWidth / menuItem.length + 'px';
            });
        }
    },

    mounted () {
        this.$nextTick(() => {
            this.changeMenuSize();
        })
        window.addEventListener('resize', () => this.changeMenuSize());
    }
}

</script>