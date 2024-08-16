<template>
    <div class="buths-add create-container">
        <div class="create">
            <ButhsHeaderCreate />
            <ButhsFormCreate />
        </div>
    </div>
</template>

<script>
import ButhsHeaderCreate from '@/components/pages/buths-create/ButhsHeaderCreate.vue';
import ButhsFormCreate from '@/components/pages/buths-create/ButhsFormCreate.vue';

export default {
    components: {
        ButhsHeaderCreate,
        ButhsFormCreate
    },

    mounted () {
        document.title = 'Создать кабинку';
    }
}
</script>