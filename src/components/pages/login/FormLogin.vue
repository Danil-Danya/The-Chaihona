<template>
    <form class="login__form">
        <h2 class="login__form-title">Административная панель</h2>
        <div class="input__container">
            <label class="input-label" ref="emailLabel">Электронная почта</label>
            <input type="email" class="input input-login" ref="emailInput" v-model="email">
            <p class="message">{{ messageEmail }}</p>
        </div>
        <div class="input__container">
            <label class="input-label" ref="passwordLabel">Пароль</label>
            <input :type="showPassword ? 'text' : 'password'" class="input input-login" ref="passwordInput" v-model="password">
            <span class="input-icon-password" @click="togglePassword"><PasswordIcon /></span>
            <p class="message">{{ messagePassword }}</p>
            <p class="message">{{ message }}</p>
        </div>
        <button class="login-button" @click.prevent="authorization">Войти</button>
    </form>
</template>

<script>
import axios from '@/api/axios';
import Validator from '@/scripts/validator';

import PasswordIcon from '@/components/icons/PasswordIcon.vue';

export default {
    data: () => ({
        email: '',
        password: '',
        messageEmail: '',
        messagePassword: '',
        message: '',
        showPassword: false
    }),

    components: {
        PasswordIcon
    },

    methods: {
        async authorization () {
            const { email, password } = this;
            const data = { email, password };

            if (this.validation()) {
                try {
                    const responseToken = await axios.post('authorization', data);
                    const token = responseToken.data.jsonwebtoken;

                    if (token) {
                        localStorage.setItem('token', token);
                    }

                    const responseUser = await axios.get('me');
                    if (responseUser) {
                        this.$router.push('/buths');
                    }
                }
                catch (error) {
                    console.log(error);
                    this.message = error.response.data.message;
                }
            }
        },

        validation () {
            const { email, password } = this;
            const { emailInput, passwordInput, emailLabel, passwordLabel } = this.$refs;

            const validator = new Validator({ email, password });

            if (!email) {
                this.messageEmail = 'Поле электроной почты не может быть пустым.';
                this.setErrorInput(emailInput, emailLabel);

                return false;
            }

            if (!password) {
                this.messagePassword = 'Поле пароля не может быть пустым.';
                this.setErrorInput(passwordInput, passwordLabel);

                return false;
            }

            if (validator.valitateEmail()) {
                this.messageEmail = validator.valitateEmail();
                this.setErrorInput(emailInput, emailLabel);

                return false;
            }

            return true;
        },

        setErrorInput (input, label) {
            input.classList.add('input-red');
            label.classList.add('input-label-red');
        },

        togglePassword () {
            this.showPassword = !this.showPassword;
        }
    }
}

</script>