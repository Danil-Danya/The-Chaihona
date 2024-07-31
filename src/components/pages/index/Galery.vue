<template>
    <section class="galery">
        <div class="galery__container">
            <div class="container">
                <div class="galery__content">
                    <div class="galery__grid">
                        <div class="galery__item" v-for="img in imagesList" :key="img">
                            <img :src="img" alt="Photo" class="galery__item-img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data: () => ({
        imagesList: [
            require('@/assets/images/galery/galery1.png'),
            require('@/assets/images/galery/galery1.png'),
            require('@/assets/images/galery/galery1.png'),
            require('@/assets/images/galery/galery2.png'),
            require('@/assets/images/galery/galery3.png'),
            require('@/assets/images/galery/galery4.png'),
        ]
    })
}

</script>