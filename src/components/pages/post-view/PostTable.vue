<template>
    <div class="table">
        <div class="table__container">
            <h2 class="table__title-h counter">{{ getBuths.count }} {{ getBuths.count > 0 && getBuths.count < 5 ? 'Поста' : 'Постов' }}</h2>
            <div class="table__header">
                <div class="table__header-number table__header-top">
                    <p class="table__header-name">#</p>
                </div>
                <div class="table__header-image table__header-top">
                    <p class="table__header-name">Изображение</p>
                </div>
                <div class="table__header-titles table__header-top">
                    <p class="table__header-name table__header-top">Заголовок</p>
                </div>
                <div class="table__header-views table__header-top">
                    <p class="table__header-name">Просмотры</p>
                </div>
                <div class="table__header-date table__header-top">
                    <p class="table__header-name">Дата</p>
                </div>
                <div class="table__header-time table__header-top">
                    <p class="table__header-name">Время</p>
                </div>
                <div class="table__header-action table__header-top">
                    <p class="table__header-name">Действия</p>
                </div>
            </div>
        </div>
        <div class="table__content">
            <div class="table__number table__top">
                <p class="table__text-bold"></p>
            </div>
            <div class="table__image table__top">
                <img src="http://localhost:5000/files/" alt="Preview" class="table__img">
            </div>
            <div class="table__titles table__top">
                <p class="table__text-bold">Роман Сайфулин об уходе из Makro, открытии The Choyxona ресторане на берегу моря за $1 млн и мечтах о бане</p>
            </div>
            <div class="table__views table__top">
                <p class="table__text">3 567</p>
            </div>
            <div class="table__date table__top">
                <p class="table__text">August 30, 2023</p>
            </div>
            <div class="table__time table__top">
                <p class="table__text">19:20</p>
            </div>
            <div class="table__action table__top">
                <span class="table__icon">
                    <router-link to="/post-edite">
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