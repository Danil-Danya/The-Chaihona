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
                        <div class="footer__social" v-if="width > 960">
                            <p class="footer__social-text">{{ $t('footer.news') }}</p>
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
                                <router-link :to="bar.path" class="footer__bar-link"> {{bar.text}} </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__contacts">
                        <ul class="footer__contacts-container">
                            <li v-for="contact in contactList" :key="contact" class="footer__contacts-el">
                                <component :is="contact.icon" />
                                <p class="footer__contacts-text" v-if="!contact.path"> {{ contact.text }} </p>
                                <a :href="contact.path" class="footer__contacts-text" v-else> {{ contact.text }} </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__action">
                        <a href="https://n745883.alteg.io/company/702167/personal/select-master?api_key=zna3an7p3yq13vqfny0k&o=m-1&companyId=702167" class="button footer__button">{{ $t('buttonNotation.text') }}</a>
                    </div>
                    <div class="footer__social footer__social-mobile" v-if="width < 960">
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
            </div>
        </div>
    </section>
</template>

<script>

import Facebook from '@/components/icons/social/Facebook.vue';
import Telegram from '@/components/icons/social/Telegram.vue';
import Instagram from '@/components/icons/social/Instagram.vue';

import Location from '@/components/icons/footer/Location.vue';
import Phone from '@/components/icons/footer/Phone.vue';
import Clock from '@/components/icons/footer/Clock.vue';

import Button from '@/components/reused/Button.vue';

export default {
    data: () => ({
        width: window.innerWidth,
        socialList: [
            {
                icon: 'facebook', 
                path: 'https://www.facebook.com/thechoyxona'
            },
            {
                icon: 'instagram', 
                path: 'https://www.instagram.com/thechoyxona'
            },
            {
                icon: 'telegram', 
                path: 'https://t.me/thechoyxona'
            }
        ],
        barList: [
            { path: '/menu', text: 'Меню' },
            { path: '/booths', text: 'Кабинки' },
            { path: '/about', text: 'О нас' },
        ],
        contactList: [
            { icon: 'Location', text: 'Ташкент, пр. Богишамол, 131', path: 'https://yandex.uz/maps/org/the_choyxona/193687795731/?ll=69.314788%2C41.332788&z=17'},
            { icon: 'Phone', text: '+998 (99) 844-88-88', path: 'tel:+998998448888'},
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
        Instagram,
        Location,
        Phone,
        Clock,
        Button
    },

    mounted () {
        const locales = this.$i18n.messages[localStorage.getItem('locale')];

        this.barList = locales.footer.barList;
        this.contactList = locales.footer.contactList;
    }
}

</script>