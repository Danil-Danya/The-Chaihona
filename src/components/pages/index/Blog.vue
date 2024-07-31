<template>
    <section class="blog">
        <div class="blog__container">
            <div class="container">
                <div class="blog__content">
                    <h2 class="title blog__title">События</h2>
                    <SliderPost />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SliderPost from '@/components/reused/blog/Slider.vue';

export default {
    components: {
        SliderPost
    }
}

</script>