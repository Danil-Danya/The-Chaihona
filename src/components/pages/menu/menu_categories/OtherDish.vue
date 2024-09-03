<template>
    <div class="menu__content">
        <div class="menu__card-container lk" id="shashlyki">
            <div class="menu__content-container menu__item-set-container">
                <h2 class="title menu__title">{{$t('menu.titles[4]')}}</h2>
                <div class="menu__item menu__item-set" v-for="product in shahlyki" :key="product">
                    <div class="menu__item-container menu__item-container-set" v-if="product">
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
            <div class="menu__content-container menu__item-set-container" id="holodnye_zakuski" style="margin-top: 30px;">
                <h2 class="title menu__title">{{$t('menu.titles[5]')}}</h2>
                <div class="menu__item menu__item-set" v-for="product in zakuski" :key="product">
                    <div class="menu__item-container menu__item-container-set" v-if="product">
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
            <div class="menu__content-container menu__item-set-container" id="goryachie_zakuski" style="margin-top: 30px;">
                <h2 class="title menu__title">{{$t('menu.titles[6]')}}</h2>
                <div class="menu__item menu__item-set" v-for="product in hotZakuski" :key="product">
                    <div class="menu__item-container menu__item-container-set" v-if="product">
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
            <div class="menu__content-container menu__item-set-container" id="salats" style="margin-top: 30px;">
                <h2 class="title menu__title">{{$t('menu.titles[7]')}}</h2>
                <div class="menu__item menu__item-set" v-for="product in salats" :key="product">
                    <div class="menu__item-container menu__item-container-set" v-if="product">
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
            <div class="menu__content-container menu__item-set-container" id="deserts" style="margin-top: 30px;">
                <h2 class="title menu__title">{{$t('menu.titles[8]')}}</h2>
                <div class="menu__item menu__item-set" v-for="product in deserts" :key="product">
                    <div class="menu__item-container menu__item-container-set" v-if="product">
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
        shahlyki: [],
        locale: localStorage.getItem('locale'),
        zakuski: [],
        hotZakuski: [],
        salats: [],
        deserts: []
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

        this.shahlyki = this.getProducts.rows.filter(item => {
            return item.Categories[0].id === 7;
        });

        this.zakuski = this.getProducts.rows.filter(item => {
            return item.Categories[0].id === 8;
        });
        this.hotZakuski = this.getProducts.rows.filter(item => {
            return item.Categories[0].id === 9;
        });
        this.salats = this.getProducts.rows.filter(item => {
            return item.Categories[0].id === 10;
        });
        this.deserts = this.getProducts.rows.filter(item => {
            return item.Categories[0].id === 11;
        });
    }
}
</script>