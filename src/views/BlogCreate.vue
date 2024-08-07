<template>
    <div class="product-add create-container">
        <div class="create">
            <ProductHeaderCreate />
            <ProductFormCreate />
        </div>
    </div>
</template>

<script>
import ProductFormCreate from '@/components/pages/product-create/ProductFormCreate.vue';
import ProductHeaderCreate from '@/components/pages/product-create/ProductHeaderCreate.vue';

export default {
    components: {
        ProductFormCreate,
        ProductHeaderCreate
    },
    mounted () {
        document.title = 'Создание поста';
    }
}
</script>