<template>
    <div class="login__page">
        <div class="login__container">
            <div class="login__logo">
                <img src="@/assets/images/nav-logo.png" alt="Logo" class="login__logo-image">
            </div>
            <div class="login__form-container">
                <FormLogin />
            </div>
        </div>
    </div>
</template>

<script>
import FormLogin from '@/components/pages/login/FormLogin.vue';

export default {
    components: {
        FormLogin
    },

    mounted () {
        document.title = 'Войти в административную панель';
    }
}

</script>