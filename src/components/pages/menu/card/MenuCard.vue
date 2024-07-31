<template>
    <section class="menu__card">
        <div class="container">
            <div class="menu__card-container" :class="category.isResversed ? 'menu__card-reversed' : ''">
                <MenuList :title="category.categories.title" :menu="category.dishes"/>
                <MenuImage :image="category.categories.image" v-if="category.categories.image" />
                <MenuList :title="category.categories.title" :menu="category.dishes" v-else/>
            </div>
        </div>
    </section>
</template>

<script>
import MenuList from '../MenuList.vue';
import MenuImage from '../MenuImage.vue';

export default {
    components: {
        MenuList,
        MenuImage
    },

    props: {
        category: Object
    },
}
</script>