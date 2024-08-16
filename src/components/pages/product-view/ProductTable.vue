<template>
    <div class="table">
        <div class="table__container">
            <h2 class="table__title-h counter"></h2>
            <div class="table__header">
                <div class="table__header-number table__header-top">
                    <p class="table__header-name">#</p>
                </div>
                <div class="table__header-title table__header-top">
                    <p class="table__header-name table__header-top">Название</p>
                </div>
                <div class="table__header-description table__header-top">
                    <p class="table__header-name">Описание</p>
                </div>
                <div class="table__header-price table__header-top">
                    <p class="table__header-name">Стоимость</p>
                </div>
                <div class="table__header-count table__header-top">
                    <p class="table__header-name">Мин-заказ</p>
                </div>
                <div class="table__header-times table__header-top">
                    <p class="table__header-name">Время</p>
                </div>
                <div class="table__header-categories table__header-top">
                    <p class="table__header-name">Категория</p>
                </div>
                <div class="table__header-action table__header-top">
                    <p class="table__header-name">Действия</p>
                </div>
            </div>
        </div>
        <div class="table__content" v-for="item in products" :key="item">
            <div class="table__number table__top">
                <p class="table__text-bold">{{ item.id }}</p>
            </div>
            <div class="table__title table__top">
                <p class="table__text-bold">{{ item.title }}</p>
            </div>
            <div class="table__description table__top">
                <p class="table__text">{{ item.description ? item.description : 'Описания продукта небыли указаны' }}</p>
            </div>
            <div class="table__price table__top">
                <p class="table__text">{{ item.price }} сум</p>
            </div>
            <div class="table__count table__top">
                <p class="table__text">{{ item.min_count ? item.min_count : 'Нет данных' }}</p>
            </div>
            <div class="table__times table__top">
                <p class="table__text">{{ item.time ? item.time : 'Нет данных' }}</p>
            </div>
            <div class="table__categories table__top">
                <p class="table__text">Первые блюда</p>
            </div>
            <div class="table__action table__top">
                <span class="table__icon" @click.prevent="togglePriceModal(item.id)">
                    <Edite />
                </span>
            </div>
        </div>
        <button class="button" @click="incrimentLimit">Показать больше</button>
        <transition name="nested" :duration="550">
            <div v-show="priceModal">
                <EditePriceModal @togglePriceModal="togglePriceModal(item)" :id="id"/>
            </div>
        </transition>
    </div>
</template>

<script>

import Panorama from '@/components/icons/360.vue';
import Delete from '@/components/icons/Delete.vue';
import Edite from '@/components/icons/Edite.vue';

import EditePriceModal from '@/components/modals/EditePriceModal.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        region: localStorage.getItem('region'),
        priceModal: false,
        deleteModal: false,
        products: [],
        id: 0,
        limit: 10,
        page: 1
    }),

    components: {
        Panorama,
        Delete,
        Edite,
        EditePriceModal
    },

    computed: {
        ...mapGetters(['getProducts'])
    },
    
    methods: {
        ...mapActions(['fetchProducts']),

        incrimentLimit () {
            this.limit+=10;
        },

        togglePriceModal (id) {
            this.id = id;
            this.priceModal = !this.priceModal;
        },

        async updateApiData () {
            const { page, limit } =  this;
            const params = { page, limit, region: localStorage.getItem('region') };

            await this.fetchProducts(params);
            this.products = this.getProducts.rows;
        }
    },

    watch: {
        limit: {
            deep: true,
            async handler () {
                await this.updateApiData();
            }
        },

        region: {
            deep: true,
            async handler () {
                await this.updateApiData();
            }
        },

        priceModal: {
            deep: true,
            async handler () {
                await this.updateApiData();
            }
        }
    },

    async mounted () {
        await this.updateApiData();
    }
}

</script>