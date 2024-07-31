<template>
    <div class="menu__image">
        <img :src="image" alt="Dish" class="menu__image-img">
    </div>
</template>

<script>
export default {
    props: {
        image: String
    }
}
</script>