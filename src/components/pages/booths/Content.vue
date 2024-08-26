<template>
    <section class="content">
        <div class="content__container">
            <div class="container">
                <div class="content__block">
                    <h2 class="content__alert">Подходящие кабинки:</h2>
                    <Card :notation="cardNatation"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Card from '@/components/pages/booths/card/Card.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        cardNatation: []
    }),

    computed: {
        ...mapGetters(['getBuths']),
    },

    methods: {
        ...mapActions(['fetchBuths']),

        async updateBuths () {
            const tags = this.$route.query.filter ? this.$route.query.filter.split('-').join(',') : null;
            const presones = this.$route.query.persones;

            const params = {
                limit: 16,
                filter: {
                    presones,
                    tags 
                }
            }

            await this.fetchBuths(params);
            this.cardNatation = this.getBuths.rows;
        },
    },

    async mounted () {
        await this.updateBuths()
    },

    watch: {
        '$route.query': {
            deep: true,
            async handler () {
                await this.updateBuths()
            }
        }
    },

    components: {
        Card
    }
}

</script>