<template>
    <div class="fillter">
        <div class="fillter__container">
            <div class="fillter__input">
                <button class="fillter__select" v-for="(categories, index) in menuDefault" :key="categories" @click="selectOptions(index)">{{ categories }}</button>
            </div>
            <div class="fillter__output">
                <div class="fillter__buttons">
                    <button class="fillter__button" v-for="(item, index) in selectedOptions" :key="item" @click="deleteOptions(index)">{{ item }}</button>
                </div>
                <div class="fillter__reset" ref="reset">
                    <p class="fillter__reset-text" @click="clearOptions">Очистить все</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        menuDefault: [
            'Первые блюда',
            'Национальные блюда',
            'Европейские блюда',
            'Ассорти и сеты',
            'Шашлыки',
            'Холодные закуски',
            'Горячие закуски',
            'Салаты',
            'Десерты',
        ],
        selectedOptions: []
    }),

    methods: {
        selectOptions (index) {
            const select = this.menuDefault[index];
            const uniqueOptions = new Set(this.selectedOptions);
            uniqueOptions.add(select);
            this.selectedOptions = Array.from(uniqueOptions);
        },

        deleteOptions (index) {
            this.selectedOptions.splice(index, 1)
        },

        clearOptions () {
            this.selectedOptions = [];
        },

        addMarginIfManyButtons () {
            if (this.selectedOptions.length > 6) {
                this.$refs.reset.style = 'margin-top: 10px';
            }
            else {
                this.$refs.reset.style = 'margin-top: 0px';
            }
        }
    },

    watch: {
        'selectedOptions': {
            deep: true,
            handler () {
                this.addMarginIfManyButtons();
            }
        }
    }
}

</script>