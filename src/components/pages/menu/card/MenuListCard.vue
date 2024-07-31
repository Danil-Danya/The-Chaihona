<template>
    <section class="menu__card">
        <div class="container">
            <div class="menu__card-list" :class="category.isResversed ? 'menu__card-reversed' : ''">
                <MenuList :title="category.categories.title" :menu="category.dishes"/>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        category: Object
    }
}
</script>