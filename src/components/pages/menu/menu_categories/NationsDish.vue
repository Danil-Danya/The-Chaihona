<template>
    <div class="menu__content" id="national">
        <div class="menu__card-container image-fixed-container">
            <div class="menu__content-container">
                <h2 class="title menu__title">Национальные блюда</h2>
                <div class="menu__item" v-for="product in products" :key="product">
                    <div class="menu__item-container">
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
            <div class="menu__image image-fixed">
                <img src="@/assets/images/menu/categories/nacional.png" alt="Dish" class="menu__image-img image-fixed-img">
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        products: []
    }),
    computed: {
        ...mapGetters(['getProducts'])
    },

    methods: {
        ...mapActions(['fetchProducts']),
    },

    async mounted () {
        const params = {
            categories_id: 5,
            limit: 50
        }
        await this.fetchProducts(params);
        this.products = this.getProducts.rows;
    }
}
</script>