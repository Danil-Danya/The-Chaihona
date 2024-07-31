<template>
    <div>
        <Filter />
        <Content />
    </div>
</template>

<script>
import Filter from '@/components/pages/booths/Filter.vue';
import Content from '@/components/pages/booths/Content.vue'

export default {
    components: {
        Filter,
        Content
    }
}

</script>

<style lang="scss">
    @import url('@/assets/styles/page-styles/booths/filter.scss');
    @import url('@/assets/styles/page-styles/booths/slider.scss');
    @import url('@/assets/styles/page-styles/booths/card.scss');
    @import url('@/assets/styles/page-styles/booths/content.scss');
    @import url('@/assets/styles/page-styles/booths/info.scss');
</style>