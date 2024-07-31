<template>
    <div class="post">
        <div class="post__container">
            <router-link :to="notation.path">
                <img :src="notation.img" alt="Preview post" class="post__img">
            </router-link>
            <div class="post__text-container">
                <p class="post__text">{{ notation.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        notation: Object
    }
}

</script>