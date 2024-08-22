<template>
    <div class="info__container">
        <h3 class="info__title">{{item.title}}</h3>
        <p class="info__text" v-for="desc in item.descriptions" :key="desc">{{ desc.description_unit }}</p>
        <div class="info__button-container">
            <a href="https://n745883.alteg.io/company/702167/personal/select-master?api_key=zna3an7p3yq13vqfny0k&o=m-1&companyId=702167" class="button">Забронировать</a>
            <!-- <button class="button bordered">360° тур</button> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>