<template>
    <section class="filter">
        <div class="filter__container">
            <div class="container">
                <div class="filter__content">
                    <div class="filter__select-container">
                        <select name="" id="" class="filter__select" v-model="persones" @input="selectPersones">
                            <option>Без ограничений</option>
                            <option :value="opt" v-for="opt in 16" :key="opt">Количество персон: {{ opt }}</option>
                        </select>
                        <select name="" id="" class="filter__select" @input="selectOptions($event)">
                            <option default>Опции</option>
                            <option :value="opt" v-for="opt in options" :key="opt">{{ opt }}</option>
                        </select>
                    </div>
                    <div class="fillter__buttons" v-if="width > 1000">
                        <button class="fillter__button button" v-for="(item, index) in selectedOptions" :key="item" @click="deleteOptions(index)">{{ item }}</button>
                    </div>
                </div>
                <div class="filter__button-container">
                    <button class="button fillter__button-default" @click="clearOptions">Сбросить</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
      data: () => ({
        persones: 10,
        options: ['PS5', 'Netflix', 'Кальян', 'AllPlay', 'ITV', 'Настольные игры'],
        selectedOptions: [],
        params: '',
        width: window.innerWidth
    }),

    
    methods: {
        selectOptions (event) {
            const select = event.target.value;

            if (select !== 'Опции') {
                const uniqueOptions = new Set(this.selectedOptions);
                uniqueOptions.add(select);
                this.selectedOptions = Array.from(uniqueOptions);
                this.params = this.selectedOptions.join('-');
                this.$router.replace({query: {filter: this.params}});
            }
        },

        selectPersones () {
            this.$router.replace({query: {persones: this.persones}});
        },

        deleteOptions (index) {
            this.selectedOptions.splice(index, 1)
            this.params = this.selectedOptions.join('-'); 
            this.$router.replace({query: {filter: this.params}});
        },

        clearOptions () {
            this.selectedOptions = [];
            this.$router.replace({query: {}});
        }
    }
}
</script>