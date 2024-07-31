<template>
    <section class="content">
        <div class="content__container">
            <div class="container">
                <div class="content__block">
                    <h2 class="content__alert">Подходящие кабинки</h2>
                    <Card :natation="cardNatation"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Card from '@/components/pages/booths/card/Card.vue';

export default {
    data: () => ({
        cardNatation: [
            { image: [] }
        ]
    }),

    components: {
        Card
    }
}

</script>