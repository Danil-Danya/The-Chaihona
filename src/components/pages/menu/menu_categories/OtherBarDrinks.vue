<template>
    <div class="menu__content" id="first">
        <div class="menu__card-container">
            <div class="menu__pivo">
                <h2 class="title menu__title">Виски</h2>
                <div class="menu__content-container">
                    <div class="menu__item" v-for="product in viskey" :key="product">
                        <div class="menu__item-container">
                            <div class="menu__item-left">
                                <h3 class="menu__item-title">{{product.title}}</h3>
                                <p class="menu__item-text">{{product.description}}</p>
                            </div>
                            <div class="menu__item-right">
                                <h3 class="menu__item-title">{{product.price}} сум</h3>
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
                <h2 class="title menu__title">Gin</h2>
                <div class="menu__content-container">
                    <div class="menu__item" v-for="product in gin" :key="product">
                        <div class="menu__item-container">
                            <div class="menu__item-left">
                                <h3 class="menu__item-title">{{product.title}}</h3>
                                <p class="menu__item-text">{{product.description}}</p>
                            </div>
                            <div class="menu__item-right">
                                <h3 class="menu__item-title">{{product.price}} сум</h3>
                                <ul class="menu__item-time">
                                    <li>
                                        <p class="menu__item-text">{{product.time}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 class="title menu__title" style="margin-top: 30px;">Ром</h2>
                <div class="menu__content-container">
                    <div class="menu__item" v-for="product in tequilla" :key="product">
                        <div class="menu__item-container">
                            <div class="menu__item-left">
                                <h3 class="menu__item-title">{{product.title}}</h3>
                                <p class="menu__item-text">{{product.description}}</p>
                            </div>
                            <div class="menu__item-right">
                                <h3 class="menu__item-title">{{product.price}} сум</h3>
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