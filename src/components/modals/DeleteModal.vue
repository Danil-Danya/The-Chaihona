<template>
    <section class="modal">
        <div class="modal__container inner">
            <div class="modal__content">
                <h2 class="title modal__title">Удаление </h2>
                <p class="modal__text ">Вы уверены что хотите удалить {{ name }}? После удаления {{ nameToDelete}} не будет доступно окончательно.</p>
                <p class="message">{{message}}</p>
                <span class="modal__line"></span>
                <div class="modal__button-container">
                    <button class="modal__button button" @click="sendToDelete">Удалить</button>
                    <button class="modal__button button" @click="toggleDeleteModal">Закрыть</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import axios from '@/api/axios.js';

export default {
    data: () => ({
        message: ''
    }),
    props: {
        id: Number,
        page: String,
        name: String,
        nameToDelete: String
    },

    methods: {
        async sendToDelete () {
            const { id, page } = this;

            try {
                const response = await axios.delete(`${page}/${id}`);
                if (response.status === 200) {
                    this.$emit('toggleDeleteModal');
                    setTimeout(() => {
                        location.reload()
                    }, 300);
                }
                else {
                    this.message = response.message;
                }
            }
            catch (error) {
                console.log(error);     
            }
        },

        toggleDeleteModal () {
            this.$emit('toggleDeleteModal');
        }
    }
}
</script>