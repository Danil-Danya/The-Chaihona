<template>
    <div class="info__container">
        <h3 class="info__title" v-if="locale === 'rus'">{{item.title}}</h3>
        <h3 class="info__title" v-if="locale === 'uzb'">{{item.title_uzb}}</h3>
        <h3 class="info__title" v-if="locale === 'eng'">{{item.title_eng}}</h3>
        <p class="info__text" v-for="desc in item.descriptions" v-if="locale === 'rus'" :key="desc">{{ desc.description_unit }}</p>
        <p class="info__text" v-for="desc in item.descriptions" v-if="locale === 'eng'" :key="desc">{{ desc.description_unit_eng }}</p>
        <p class="info__text" v-for="desc in item.descriptions" v-if="locale === 'uzb'" :key="desc">{{ desc.description_unit_uzb }}</p>
        <div class="info__button-container">
            <a href="https://n745883.alteg.io/company/702167/personal/select-master?api_key=zna3an7p3yq13vqfny0k&o=m-1&companyId=702167" class="button">Забронировать</a>
            <!-- <button class="button bordered">360° тур</button> -->
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        locale: localStorage.getItem('locale')
    }),
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>