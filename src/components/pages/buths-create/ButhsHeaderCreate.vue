<template>
    <div class="create__header">
        <div class="create__header-block" @click="goBack">
            <span class="create__header-icon">
                <Back />
            </span>
            <p class="create__header-text">Назад</p>
        </div>
        <div class="create__header-block">
            <h2 class="create__header-title">Добавить кабинку</h2>
        </div>
        <div class="create__header-block" @click="goToList">
            <p class="create__header-text">Список</p>
        </div>
    </div>
</template>

<script>
import Back from '@/components/icons/Back.vue';

export default {
    components: {
        Back
    },

    methods: {
        goBack () {
            this.$router.go(-1);
        },

        goToList () {
            this.$router.replace({path: '/buths'});
        }
    }
}
</script>