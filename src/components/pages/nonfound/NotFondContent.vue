<template>
    <div class="notfound__container">
        <div class="container">
            <div class="notfound__content">
                <div class="notfound__ornament-container">
                    <span class="notfound__ornament">
                        <OrnmentLeft />
                    </span>
                    <span class="notfound__ornament">
                        <OrnmentRight />
                    </span>
                </div>
                <div class="notfound__info">
                    <h2 class="notfound__title">Упс, что-то пошло не так!</h2>
                    <h2 class="notfound__title-error">404</h2>
                    <p class="notfound__text">Страница не найдена. Проверьте подключению к интернету и убедитесь что подключение доступно</p>
                    <router-link to="/" class="notfound__link">На главную</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import OrnmentLeft from '@/components/icons/notfound/OrnamentLeft.vue';
import OrnmentRight from '@/components/icons/notfound/OrnamentRight.vue';

export default {
    components: {
        OrnmentLeft,
        OrnmentRight
    }
}

</script>