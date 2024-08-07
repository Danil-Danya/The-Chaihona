<template>
    <div class="table">
        <div class="table__container">
            <h2 class="table__title-h counter">{{ getBuths.count }} {{ getBuths.count > 0 && getBuths.count < 5 ? 'Кабинки' : 'Кабинок' }}</h2>
            <div class="table__header">
                <div class="table__header-number table__header-top">
                    <p class="table__header-name">#</p>
                </div>
                <div class="table__header-image table__header-top">
                    <p class="table__header-name">Изображение</p>
                </div>
                <div class="table__header-title table__header-top">
                    <p class="table__header-name table__header-top">Название</p>
                </div>
                <div class="table__header-description table__header-top">
                    <p class="table__header-name">Описание</p>
                </div>
                <div class="table__header-persones table__header-top">
                    <p class="table__header-name">Количество персон</p>
                </div>
                <div class="table__header-360 table__header-top">
                    <p class="table__header-name">360° тур</p>
                </div>
                <div class="table__header-action table__header-top">
                    <p class="table__header-name">Действия</p>
                </div>
            </div>
        </div>
        <div class="table__content" v-for="buth in buths" :key="buths">
            <div class="table__number table__top">
                <p class="table__text-bold">{{ buth.id }}</p>
            </div>
            <div class="table__image table__top">
                <img :src="`http://localhost:5000/files/${buth.images[1].path}`" alt="Preview" class="table__img">
            </div>
            <div class="table__titles table__top">
                <p class="table__text-bold">{{ buth.title }}</p>
            </div>
            <div class="table__description table__top">
                <p class="table__text">{{ buth.descriptions[0].description_unit }}</p>
            </div>
            <div class="table__persones table__top">
                <p class="table__text">{{ buth.presones }}</p>
            </div>
            <div class="table__360 table__top">
                <span class="table__icon">
                    <router-link to="">
                        <Panorama />
                    </router-link>
                </span>
            </div>
            <div class="table__action table__top">
                <span class="table__icon">
                    <router-link to="/buths-edite">
                        <Edite />
                    </router-link>
                </span><span class="table__icon">
                    <router-link to="#">
                        <Delete />
                    </router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>

import Panorama from '@/components/icons/360.vue';
import Delete from '@/components/icons/Delete.vue';
import Edite from '@/components/icons/Edite.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        buths: []
    }),

    components: {
        Panorama,
        Delete,
        Edite
    },

    computed: {
        ...mapGetters(['getBuths'])
    },
    
    methods: {
        ...mapActions(['fetchBuths'])
    },

    async mounted () {
        await this.fetchBuths();
        this.buths = this.getBuths.rows;
    }
}

</script>