<template>
    <section class="modal">
        <div class="modal__container inner">
            <div class="modal__content">
                <h2 class="title modal__title">Изменить цену продукта</h2>
                <span class="modal__line"></span>
                <div class="input__container modal__input-container">
                    <label class="input-label">Цена продукта</label>
                    <input type="number" class="input modal__input" placeholder="100000" v-model="price">
                    <p class="message modal__message">{{ message }}</p>    
                </div>
                <div class="modal__button-container">
                    <button class="modal__button button" @click="editePriceApi">Отправить</button>
                    <button class="modal__button button" @click="togglePriceModal">Закрыть</button>
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
        id: Number
    },

    methods: {
        togglePriceModal () {
            this.$emit('togglePriceModal');
        },

        async editePriceApi () {
            const { price, id } = this;
            
            if (!id) {
                this.message = 'У вас не определен ID продукта.';
                return;
            }

            if (!price) {
                this.message = 'Цена не может быть равна нулю.';
                return;
            }

            try {
                const url = `/products/${id}`;
                const data = { price }

                const response = await axios.patch(url, data);

                if (response.status === 200) {
                    this.togglePriceModal();
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    },

    unmounted () {
        this.message = '';
    }
}
</script>