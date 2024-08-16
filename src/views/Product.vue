<template>
    <section class="products">
        <ProductAdd />
        <ProductFilter />
        <ProductTable />
    </section>
</template>

<script>

import ProductAdd from '@/components/pages/product-view/ProductAdd.vue';
import ProductTable from '@/components/pages/product-view/ProductTable.vue';
import ProductFilter from '@/components/pages/product-view/ProductFilter.vue';

export default {
    components: {
        ProductAdd,
        ProductTable,
        ProductFilter
    },

    mounted () {
        document.title = 'Меню продуктов';
    }
}

</script>