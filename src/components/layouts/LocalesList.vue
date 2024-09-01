<template>
    <div class="navbar__locales-list">
        <ul class="navbar__locales-ul">
            <li v-for="(local, index) in locales" :key="local" @click="changeLanguage(index)">
                <p class="navbar__locales-text navbar__locales-trigger">{{ local }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        locales: [
            'Rus',
            'Eng',
            'Uzb',
        ]
    }),

    methods: {
        changeLanguage (index) {
            this.$i18n.locale = this.locales[index].toLocaleLowerCase(); 
            localStorage.setItem('locale', this.locales[index].toLocaleLowerCase());

            location.reload();
        },

        toggleLocalesList () {
            this.$emit('toggleLocalesList');
        },
    },

    watch: {
        '$i18n.locale': {
            immediate: true,
            deep: true,
            handler () {
                this.locales = this.locales.filter(lang => lang.toLocaleLowerCase() !== this.$i18n.locale);
            }
        }
    },  

    mounted () {
        this.$i18n.locale = localStorage.getItem('locale');

        if (this.$i18n.locale === 'en-US') {
            this.$i18n.locale = 'rus';с
            this.$i18n.locale = localStorage.setItem('locale', this.$i18n.locale);
        }
    }
}
</script>