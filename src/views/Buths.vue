<template>
    <section class="buths">
        <ButhsAdd />
        <ButhsFilter />
        <ButhsTable />
    </section>
</template>

<script>

import ButhsAdd from '@/components/pages/buths-view/ButhsAdd.vue';
import ButhsTable from '@/components/pages/buths-view/ButhsTable.vue';
import ButhsFilter from '@/components/pages/buths-view/ButhsFilter.vue';

export default {
    components: {
        ButhsAdd,
        ButhsFilter,
        ButhsTable
    },

    mounted () {
        document.title = 'Список кабинок';
    }
}

</script>