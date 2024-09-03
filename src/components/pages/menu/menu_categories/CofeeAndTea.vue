<template>
    <div class="menu__content" id="first">
        <div class="menu__card-container">
            <div class="menu__pivo">
                <h2 class="title menu__title" id="coffee">{{$t('menu.titles[17]')}}</h2>
                <div class="menu__content-container">
                    <div class="menu__item" v-for="product in coffee" :key="product">
                        <div class="menu__item-container">
                            <div class="menu__item-left">
                               <h3 class="menu__item-title" v-if="locale === 'rus'">{{product.title}}</h3>
                                <h3 class="menu__item-title" v-if="locale === 'eng'">{{product.title_eng ? product.title_eng : product.title}}</h3>
                                <h3 class="menu__item-title" v-if="locale === 'uzb'">{{product.title_uzb ? product.title_uzb : product.title}}</h3>
                                <p class="menu__item-text" v-if="locale === 'rus'">{{product.description}}</p>
                                <p class="menu__item-text" v-if="locale === 'eng'">{{product.description_eng}}</p>
                                <p class="menu__item-text" v-if="locale === 'uzb'">{{product.description_uzb}}</p>
                            </div>
                            <div class="menu__item-right">
                                <h3 class="menu__item-title">{{product.price}} {{$t('menu.unit')}} </h3>
                                <ul class="menu__item-time">
                                    <li>
                                        <p class="menu__item-text">{{product.time}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu__vodka">
                <h2 class="title menu__title" id="chay">{{$t('menu.titles[18]')}}</h2>
                <div class="menu__content-container">
                    <div class="menu__item" v-for="product in tea" :key="product">
                        <div class="menu__item-container">
                            <div class="menu__item-left">
                                <h3 class="menu__item-title" v-if="locale === 'rus'">{{product.title}}</h3>
                                <h3 class="menu__item-title" v-if="locale === 'eng'">{{product.title_eng ? product.title_eng : product.title}}</h3>
                                <h3 class="menu__item-title" v-if="locale === 'uzb'">{{product.title_uzb ? product.title_uzb : product.title}}</h3>
                                <p class="menu__item-text" v-if="locale === 'rus'">{{product.description}}</p>
                                <p class="menu__item-text" v-if="locale === 'eng'">{{product.description_eng}}</p>
                                <p class="menu__item-text" v-if="locale === 'uzb'">{{product.description_uzb}}</p>
                            </div>
                            <div class="menu__item-right">
                                <h3 class="menu__item-title">{{product.price}} {{$t('menu.unit')}} </h3>
                                <ul class="menu__item-time">
                                    <li>
                                        <p class="menu__item-text">{{product.time}}</p>
                                    </li>
                                </ul>
                            </div>
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
        locale: localStorage.getItem('locale'),
        products: [],
        coffee: [],
        tea: []
    }),
    computed: {
        ...mapGetters(['getProducts'])
    },

    methods: {
        ...mapActions(['fetchProducts']),
    },

    async mounted () {
        const params = {
            limit: 10000
        }
        await this.fetchProducts(params);

        this.coffee = this.getProducts.rows.filter(item => {
            return item.Categories[0].id === 181;
        });

        this.tea = this.getProducts.rows.filter(item => {
            return item.Categories[0].id === 180;
        });
    }
}
</script>