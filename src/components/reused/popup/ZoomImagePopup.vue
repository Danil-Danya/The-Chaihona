<template>
    <div class="zoom" @click="toggleZoom">
        <div class="zoom__container">
            <transition name="zoom" :duration="500">
                <div class="zoom__image .inner" v-if="image">
                    <img :src="image" alt="Image" class="zoom__image-img">
                </div>
            </transition>
        </div>
     </div>
</template>


<script>

export default {
    props: {
        image: {
            type: String,
            required: true
        }
    },

    methods: {
        toggleZoom () {
            this.$emit('toggleZoom')
        }
    }
}

</script>