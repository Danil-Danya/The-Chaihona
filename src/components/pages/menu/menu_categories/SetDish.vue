<template>
    <div class="menu__content" id="set">
        <div class="menu__card-container">
            <div class="menu__content-container">
                <h2 class="title menu__title">{{$t('menu.titles[3]')}}</h2>
            </div>
            <div class="menu__image">
                <img src="@/assets/images/menu/categories/assorti.png" alt="Dish" class="menu__image-img image-fixed-img">
            </div>
            <div class="menu__item-set-container">
                <div class="menu__item menu__item-set" v-for="product in products" :key="product">
                    <div class="menu__item-container-set">
                        <div class="menu__item-left">
                            <h3 class="menu__item-title" v-if="locale === 'rus'">{{product.title}}</h3>
                            <h3 class="menu__item-title" v-if="locale === 'eng'">{{product.title_eng}}</h3>
                            <h3 class="menu__item-title" v-if="locale === 'uzb'">{{product.title_uzb}}</h3>
                            <p class="menu__item-text" v-if="locale === 'rus'">{{product.description}}</p>
                            <p class="menu__item-text" v-if="locale === 'eng'">{{product.description_eng}}</p>
                            <p class="menu__item-text" v-if="locale === 'uzb'">{{product.description_uzb}}</p>
                        </div>
                        <div class="menu__item-right">
                            <h3 class="menu__item-title">{{product.price}} {{$t('menu.unit')}} </h3>
                            <ul class="menu__item-time">
                                <li>
                                    <p class="menu__item-text" v-if="locale === 'rus'">{{product.time}}</p>
                                    <p class="menu__item-text" v-if="locale === 'eng'">{{product.time_eng}}</p>
                                    <p class="menu__item-text" v-if="locale === 'uzb'">{{product.time_uzb}}</p>
                                </li>
                                <li v-if="product.min_count">
                                    <p class="menu__item-text">{{$t('menu.min_count.text')}} {{product.min_count}} </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        products: [],
        locale: localStorage.getItem('locale')
    }),
    computed: {
        ...mapGetters(['getProducts'])
    },

    methods: {
        ...mapActions(['fetchProducts']),
    },

    async mounted () {
        const params = {
            categories_id: 6
        }
        await this.fetchProducts(params);
        this.products = this.getProducts.rows;
    }
}
</script>