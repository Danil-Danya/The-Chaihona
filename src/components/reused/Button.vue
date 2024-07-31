<template>
    <router-link :to="isLink">
        <button class="button" :class="isBordered">{{ notation.text }}</button>
    </router-link>
</template>

<script>

export default {
    props: {
        notation: Object
    },

    computed: {
        isLink () {
            return this.notation.path ? this.notation.path : '#';
        },
        
        isBordered () {
            if (this.notation.bordered) {
                return 'bordered'
            }
        }
    }
}

</script>