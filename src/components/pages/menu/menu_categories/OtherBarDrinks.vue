<template>
    <div class="menu__content" id="first">
        <div class="menu__card-container">
            <div class="menu__pivo">
                <h2 class="title menu__title" id="viski">{{$t('menu.titles[11]')}}</h2>
                <div class="menu__content-container">
                    <div class="menu__item" v-for="product in viskey" :key="product">
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
                <h2 class="title menu__title" id="gin">{{$t('menu.titles[12]')}}</h2>
                <div class="menu__content-container">
                    <div class="menu__item" v-for="product in gin" :key="product">
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
                <h2 class="title menu__title" style="margin-top: 30px;" id="rum">{{$t('menu.titles[13]')}}</h2>
                <div class="menu__content-container">
                    <div class="menu__item" v-for="product in tequilla" :key="product">
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
        gin: [],
        viskey: [],
        tequilla: []
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

        this.gin = this.getProducts.rows.filter(item => {
            return item.Categories[0].id === 175;
        });

        this.viskey = this.getProducts.rows.filter(item => {
            return item.Categories[0].id === 178;
        });

        this.tequilla = this.getProducts.rows.filter(item => {
            return item.Categories[0].id === 177;
        });
    }
}
</script>