<template>
    <div class="fillter">
        <div class="fillter__container">
            <div class="fillter__input">
                <select name="" id="" class="fillter__select" v-model="persones">
                    <option :value="persones">Количество персон: {{ persones }}</option>
                    <option :value="item" v-for="item in 16" :key="item">Количество персон: {{ item }}</option>
                </select>
                <select name="" id="" class="fillter__select" @input="selectOptions($event)">
                    <option>Опции</option>
                    <option :value="item" v-for="item in options" :key="item"> {{ item }} </option>
                </select>
            </div>
            <div class="fillter__output">
                <div class="fillter__buttons">
                    <button class="fillter__button">Количество персон: {{ persones }}</button>
                    <button class="fillter__button" v-for="(item, index) in selectedOptions" :key="item" @click="deleteOptions(index)">{{ item }}</button>
                </div>
                <div class="fillter__reset">
                    <p class="fillter__reset-text" @click="clearOptions">Очистить все</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        persones: 'По умолчанию',
        options: ['PS5', 'Netflix', 'Кальян', 'AllPlay', 'ITV', 'Настольные игры'],
        selectedOptions: []
    }),

    methods: {
        selectOptions (event) {
            const select = event.target.value;

            if (select !== 'Опции') {
                const uniqueOptions = new Set(this.selectedOptions);
                uniqueOptions.add(select);
                this.selectedOptions = Array.from(uniqueOptions);
            }
        },

        deleteOptions (index) {
            this.selectedOptions.splice(index, 1)
        },

        clearOptions () {
            this.selectedOptions = [];
        }
    }
}

</script>