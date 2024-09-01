<template>
    <div class="menu__content" id="first">
        <div class="menu__card-container">
            <div class="menu__pivo">
                <h2 class="title menu__title" id="konyak">Коньяк</h2>
                <div class="menu__content-container">
                    <div class="menu__item" v-for="product in kognack" :key="product">
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
                <h2 class="title menu__title" id="tekilla">Текилла</h2>
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
        kognack: [],
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

        this.kognack = this.getProducts.rows.filter(item => {
            return item.Categories[0].id === 657;
        });

        this.tequilla = this.getProducts.rows.filter(item => {
            return item.Categories[0].id === 609;
        });
    }
}
</script>