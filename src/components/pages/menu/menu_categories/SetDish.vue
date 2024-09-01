<template>
    <div class="menu__content" id="set">
        <div class="menu__card-container">
            <div class="menu__content-container">
                <h2 class="title menu__title">Ассорти и сеты</h2>
            </div>
            <div class="menu__image">
                <img src="@/assets/images/menu/categories/assorti.png" alt="Dish" class="menu__image-img image-fixed-img">
            </div>
            <div class="menu__item-set-container">
                <div class="menu__item menu__item-set" v-for="product in products" :key="product">
                    <div class="menu__item-container-set">
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
                                <li>
                                    <p class="menu__item-text">{{product.min_count}}</p>
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
            categories_id: 6
        }
        await this.fetchProducts(params);
        this.products = this.getProducts.rows;
    }
}
</script>