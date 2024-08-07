<template>
    <div class="add">
        <div class="add__container product__button-container">
            <div class="add__buttons product__button-content">
                <div class="product__button-query" @click="setQueryFilter('default')">Основное меню</div>
                <div class="product__button-query" @click="setQueryFilter()">Барное меню</div>
                <span class="product__button-line" ref="line"></span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        setQueryFilter (button) {
            const line = this.$refs.line;

            if (button === 'default') {
                this.$router.replace({query: {menu_type: 'default'}});
                line.classList.remove('product__button-line-active');
            }
            else {
                this.$router.replace({query: {menu_type: 'bar'}});
                line.classList.add('product__button-line-active');
            }
        }
    }    
}

</script>