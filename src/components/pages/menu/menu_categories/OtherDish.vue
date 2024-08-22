<template>
    <div class="menu__content">
        <div class="menu__card-container lk" id="shashlyki">
            <div class="menu__content-container menu__item-set-container">
                <h2 class="title menu__title">Шашлыки</h2>
                <div class="menu__item menu__item-set" v-for="product in shahlyki" :key="product">
                    <div class="menu__item-container menu__item-container-set" v-if="product">
                        <div class="menu__item-left">
                            <h3 class="menu__item-title">{{product.title}}</h3>
                            <p class="menu__item-text">{{product.description}}</p>
                        </div>
                        <div class="menu__item-right">
                            <h3 class="menu__item-title">{{product.price}} сум</h3>
                            <ul class="menu__item-time">
                                <li>
                                    <p class="menu__item-text">{{product.time === 'Varies' ? '' : product.time}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu__content-container menu__item-set-container" id="holodnye_zakuski" style="margin-top: 30px;">
                <h2 class="title menu__title">Холодные закуски</h2>
                <div class="menu__item menu__item-set" v-for="product in zakuski" :key="product">
                    <div class="menu__item-container menu__item-container-set" v-if="product">
                        <div class="menu__item-left">
                            <h3 class="menu__item-title">{{product.title}}</h3>
                            <p class="menu__item-text">{{product.description}}</p>
                        </div>
                        <div class="menu__item-right">
                            <h3 class="menu__item-title">{{product.price}} сум</h3>
                            <ul class="menu__item-time">
                                <li>
                                    <p class="menu__item-text">{{product.time === 'Varies' ? '' : product.time}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu__content-container menu__item-set-container" id="goryachie_zakuski" style="margin-top: 30px;">
                <h2 class="title menu__title">Горячие закуски</h2>
                <div class="menu__item menu__item-set" v-for="product in hotZakuski" :key="product">
                    <div class="menu__item-container menu__item-container-set" v-if="product">
                        <div class="menu__item-left">
                            <h3 class="menu__item-title">{{product.title}}</h3>
                            <p class="menu__item-text">{{product.description}}</p>
                        </div>
                        <div class="menu__item-right">
                            <h3 class="menu__item-title">{{product.price}} сум</h3>
                            <ul class="menu__item-time">
                                <li>
                                    <p class="menu__item-text">{{product.time === 'Varies' ? '' : product.time}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu__content-container menu__item-set-container" id="salats" style="margin-top: 30px;">
                <h2 class="title menu__title">Салаты</h2>
                <div class="menu__item menu__item-set" v-for="product in salats" :key="product">
                    <div class="menu__item-container menu__item-container-set" v-if="product">
                        <div class="menu__item-left">
                            <h3 class="menu__item-title">{{product.title}}</h3>
                            <p class="menu__item-text">{{product.description}}</p>
                        </div>
                        <div class="menu__item-right">
                            <h3 class="menu__item-title">{{product.price}} сум</h3>
                            <ul class="menu__item-time">
                                <li>
                                    <p class="menu__item-text">{{product.time === 'Varies' ? '' : product.time}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu__content-container menu__item-set-container" id="deserts" style="margin-top: 30px;">
                <h2 class="title menu__title">Десерты</h2>
                <div class="menu__item menu__item-set" v-for="product in deserts" :key="product">
                    <div class="menu__item-container menu__item-container-set" v-if="product">
                        <div class="menu__item-left">
                            <h3 class="menu__item-title">{{product.title}}</h3>
                            <p class="menu__item-text">{{product.description}}</p>
                        </div>
                        <div class="menu__item-right">
                            <h3 class="menu__item-title">{{product.price}} сум</h3>
                            <ul class="menu__item-time">
                                <li>
                                    <p class="menu__item-text">{{product.time === 'Varies' ? '' : product.time}}</p>
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