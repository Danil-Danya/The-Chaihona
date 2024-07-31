<template>
    <section class="footer">
        <div class="footer__container">
            <div class="container">
                <div class="footer__content">
                    <div class="footer__slogan">
                        <div class="footer__logo-container">
                            <router-link to="/">
                                <img src="@/assets/images/footer/logo.svg" alt="Logo" class="footer__logo">
                            </router-link>
                        </div>
                        <div class="footer__social">
                            <p class="footer__social-text">Следите за новостями</p>
                            <ul class="footer__social-container">
                                <li v-for="social in socialList" :key="social">
                                    <a :href="social.path" class="footer__social-link">
                                        <component :is="social.icon" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__bar">
                        <ul class="footer__bar-container">
                            <li v-for="bar in barList" :key="bar">
                                <router-link :to="bar.paths" class="footer__bar-link"> {{bar.text}} </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__contacts">
                        <ul class="footer__contacts-container">
                            <li v-for="contact in contactList" :key="contact" class="footer__contacts-el">
                                <component :is="contact.icon" />
                                <p class="footer__contacts-text"> {{ contact.text }} </p>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__action">
                        <Button :notation="buttonNotation" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Facebook from '@/components/icons/social/Facebook.vue';
import Telegram from '@/components/icons/social/Telegram.vue';
import Istagram from '@/components/icons/social/Instagram.vue';

import Location from '@/components/icons/footer/Location.vue';
import Phone from '@/components/icons/footer/Phone.vue';
import Clock from '@/components/icons/footer/Clock.vue';

import Button from '@/components/reused/Button.vue';

export default {
    data: () => ({
        socialList: [
            { path: '', icon: 'Facebook' },
            { path: '', icon: 'Telegram' },
            { path: '', icon: 'Istagram' },
        ],
        barList: [
            { path: '/menu', text: 'Меню' },
            { path: '/booths', text: 'Кабинки' },
            { path: '/about', text: 'О нас' },
        ],
        contactList: [
            { icon: 'Location', text: 'Ташкент, пр. Богишамол, 131' },
            { icon: 'Phone', text: '+998 (99) 844-88-88' },
            { icon: 'Clock', text: 'Каждый день с 08:00 - 23:00' },
        ],
        buttonNotation: {
            text: 'Забронировать',
            path: ''
        }
    }),

    components: {
        Facebook,
        Telegram,
        Istagram,
        Location,
        Phone,
        Clock,
        Button
    }
}

</script>