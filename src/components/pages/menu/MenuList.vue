<template>
    <div class="menu__content">
        <h2 class="title menu__title">Первые блюда</h2>
        <div class="menu__content-container">
            <div class="menu__item" v-for="item in menu" :key="item">
                <div class="menu__item-container">
                    <div class="menu__item-left">
                        <h3 class="menu__item-title">{{ item.title }}</h3>
                        <p class="menu__item-text">{{ item.desctiption }}</p>
                    </div>
                    <div class="menu__item-right">
                        <h3 class="menu__item-title">{{ item.price }} сум</h3>
                        <ul class="menu__item-time">
                            <li>
                                <p class="menu__item-text">{{ item.time }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menu: Array
    }
}
</script>