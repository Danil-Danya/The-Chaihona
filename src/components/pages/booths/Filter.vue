<template>
    <section class="filter">
        <div class="filter__container">
            <div class="container">
                <div class="filter__content">
                    <div class="filter__select-container">
                        <select class="filter__select" v-model="persones" @input="selectPersones">
                            <option :value="opt" v-for="opt in presonesOpt" :key="opt">{{$t('booths.filters.persones')}} {{ opt }}</option>
                        </select>
                        <select class="filter__select" @input="selectOptions($event)">
                            <option default>{{$t('booths.filters.options')}}</option>
                            <option :value="opt.value" v-for="opt in options" :key="opt">{{ opt.name }}</option>
                        </select>
                    </div>
                    <div class="fillter__buttons" v-if="width > 1000">
                        <button class="fillter__button button" v-for="(item, index) in selectedOptions" :key="item" @click="deleteOptions(index)">{{ item }}</button>
                    </div>
                </div>
                <div class="filter__button-container">
                    <button class="button fillter__button-default" @click="clearOptions">{{$t('booths.filters.reset')}}</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
      data: () => ({
        locale: localStorage.getItem('locale'),
        persones: 10,
        options: [
            { "name": "PS5", "value": "PS5" },
            { "name": "Netflix", "value": "Netflix" },
            { "name": "Кальян", "value": "Кальян" },
            { "name": "AllPlay", "value": "AllPlay" },
            { "name": "ITV", "value": "ITV" },
            { "name": "Настольные игры", "value": "Настольные игры" }
        ],
        presonesOpt: ['любые', 6, 10, 12, 14, 16, 22],
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
            setTimeout(() => {
                if (typeof this.persones === 'number') {
                    this.$router.replace({query: {persones: this.persones}});
                }
                else {
                    this.$router.replace({query: {}});
                }
            }, 10);
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
    },

    mounted () {
        this.options = this.$i18n.messages[this.locale].booths.filters.optionsArr;

        if (this.locale === 'rus') {
            this.presonesOpt[0] = 'любые';
        }
        if (this.locale === 'eng') {
            this.presonesOpt[0] = 'any';
        }
        if (this.locale === 'uzb') {
            this.presonesOpt[0] = 'har qanday';
        }
    }
}
</script>