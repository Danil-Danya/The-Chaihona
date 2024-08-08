<template>
    <section class="navbar">
        <transition name="navbar">
            <div class="navbar__mobile-block" v-show="mobile">
                <MobileNavbar :navList="navList" :contacts="contactList"  @toggleBar="toggleBar"/>
            </div>
        </transition>
        <div class="navbar__content">
            <div class="container">
                <div class="navbar__content">
                    <div class="navbar__logo-contaiber">
                        <router-link to="/">
                            <img src="@/assets/images/navbar/logo.svg" alt="Logo" class="navbar__logo">
                        </router-link>
                    </div>
                    <div class="navbar__nav" v-if="documentWidth > 1300">
                        <nav class="nav">
                            <ul class="navbar__nav-ul">
                                <li v-for="link in navList" :key="link">
                                    <router-link :to="link.path" class="navbar__nav-link">
                                        {{ link.text }}
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="navbar__language"></div>
                    <div class="navbar__burgermenu" v-if="documentWidth < 1300">
                        <button class="navbar__burgermenu-button" @click="toggleBar">
                            <span class="navbar__burgermenu-line" v-for="item in 3"></span>
                        </button>
                    </div>
                    <div class="navbar__contact" v-if="documentWidth > 1300">
                        <ul>
                            <li v-for="link in contactList" :key="link">
                                <a :href="link.path" class="navbar__contact-link">
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

export default {
    data: () => ({
        documentWidth: window.innerWidth,
        mobile: false,
        navList: [
            { path: '', text: 'Забронировать' },
            { path: '/menu', text: 'Меню' },
            { path: '/booths', text: 'Кабинки' },
            { path: '/about', text: 'О нас' },
            { path: '/blog', text: 'Блог' },
            { path: '/staff', text: 'Золотые руки' }
        ],
        contactList: [
            { path: '', text: 'Ташкент, пр. Богишамол, 131', icon: 'Location' },
            { path: 'tel:+998998448888', text: '+998 (99) 844-88-88', icon: 'Phone' },
        ]
    }),

    components: {
        Location,
        MobileNavbar,
        Phone
    },

    methods: {
        toggleBar () {
            this.mobile = !this.mobile;
        }
    },

    mounted () {
        window.addEventListener('resize', () => this.documentWidth = window.innerWidth);
    }
}

</script>