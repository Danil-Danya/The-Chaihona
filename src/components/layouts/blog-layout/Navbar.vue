<template>
    <section class="navbar-blog">
        <transition name="navbar">
            <div class="navbar__mobile-block" v-show="mobile">
                <MobileNavbar :navList="navList" :contacts="contactList"  @toggleBar="toggleBar"/>
            </div>
        </transition>
        <div class="navbar-blog__content">
            <div class="container">
                <div class="navbar-blog__content">
                    <div class="navbar__logo-contaiber">
                        <router-link to="/">
                            <img src="@/assets/images/navbar/logo-blog.svg" alt="Logo" class="navbar-blog__logo">
                        </router-link>
                    </div>
                    <div class="navbar-blog__nav" v-if="documentWidth > 1300">
                        <nav class="nav">
                            <ul class="navbar-blog__nav-ul">
                                <li v-for="link in navList" :key="link">
                                    <a :href="link.path" class="navbar-blog__nav-link">
                                        {{ link.text }}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="navbar-blog__language"></div>
                    <div class="navbar__burgermenu" v-if="documentWidth < 1300">
                        <button class="navbar__burgermenu-button" @click="toggleBar">
                            <span class="navbar__burgermenu-line-black" v-for="item in 3"></span>
                        </button>
                    </div>
                    <div class="navbar-blog__contact" v-if="documentWidth > 1300">
                        <ul>
                            <li v-for="link in contactList" :key="link">
                                <a :href="link.path" class="navbar-blog__contact-link">
                                    <component :is="link.icon" />
                                    <p> {{ link.text }} </p>
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

import Location from '@/components/icons/navbar/Location.vue';
import Phone from '@/components/icons/navbar/Phone.vue';
import MobileNavbar from '../MobileNavbar.vue';
import LocalesList from '../LocalesList.vue';

export default {
    data: () => ({
        documentWidth: window.innerWidth,
        locale: localStorage.getItem('locale'),
        locales: false,
        mobile: false,
        navList: [
            { path: 'https://n745883.alteg.io/company/702167/personal/select-master?api_key=zna3an7p3yq13vqfny0k&o=m-1&companyId=702167', text: 'Забронировать' },
            { path: '/menu', text: 'Меню' },
            { path: '/booths', text: 'Кабинки' },
            { path: '/about', text: 'О нас' },
            { path: '/blog', text: 'Блог' },
            { path: '/about#staff', text: 'Золотые руки' }
        ],
        contactList: [
            { path: 'https://yandex.uz/maps/org/the_choyxona/193687795731/?ll=69.314788%2C41.332788&z=17', text: 'Ташкент, пр. Богишамол, 131', icon: 'Location' },
            { path: 'tel:+998998448888', text: '+998 (99) 844-88-88', icon: 'Phone' },
        ]
    }),

    components: {
        Location,
        MobileNavbar,
        LocalesList,
        Phone
    },

    methods: {
        toggleBar () {
            this.mobile = !this.mobile;
        },

        toggleLocalesList () {
            this.locales = !this.locales;
        },

        closeLocalList () {
            this.locales = false;
        }
    },

    mounted () {
         this.locale = this.locale.charAt(0).toUpperCase() + this.locale.slice(1);

        window.addEventListener('resize', () => this.documentWidth = window.innerWidth);
        document.body.addEventListener('click', (e) => this.closeLocalList());

        this.$i18n.locale = localStorage.getItem('locale');

        if (this.$i18n.locale === 'en-US') {
            this.$i18n.locale = 'rus';
            this.$i18n.locale = localStorage.setItem('locale', this.$i18n.locale);
        }

        this.navList = this.$i18n.messages[localStorage.getItem('locale')].navbar.navList;
        this.contactList = this.$i18n.messages[localStorage.getItem('locale')].navbar.contactList;
    }
}

</script>