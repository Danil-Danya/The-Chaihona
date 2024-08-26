<template>
    <div class="navbar__mobile">
        <div class="container">
            <div class="navbar__mobile-header">
                <div class="navbar__mobile-logo-container">
                    <router-link to="/">
                        <img src="@/assets/images/navbar/logo-mobile-black.svg" alt="Logo-mobile" class="mobile__navbar-logo">
                    </router-link>
                </div>
                <div class="navbar__mobile-buttons">
                    <!-- <button class="navbar__mobile-lang">
                        <p class="navbar__mobile-lang-text">Рус</p>
                        <span class="navbar__mobile-icon"></span>
                    </button> -->
                    <button class="navbar__mobile-chrest" @click="toggleBar">
                        <span class="navbar__mobile-icon-chrest" v-for="item in 2" :key="item"></span>
                    </button>
                </div>
            </div>
            <div class="navbar__mobile-ornament">
                <Ornament />
            </div>
            <nav class="navbar__mobile-nav">
                <ul class="navbar__mobile-ul">
                    <li v-for="link in navList" :key="link" @click="toggleBar">
                        <a :href="link.path" class="navbar__mobile-link">{{ link.text }}</a>
                    </li>
                </ul>
            </nav>
            <span class="navbar__mobile-line"></span>
            <div class="navbar__mobile-contacts">
                <ul class="navbar__mobile-contacts-ul">
                    <li v-for="item in contacts" :item >
                        <a :href="item.path" class="navbar__mobile-contacts-li">
                            <span class="navbar__mobile-icon">
                                <component :is="item.icon" />
                            </span>
                            <p class="navbar__mobile-contacts-text">{{ item.text }}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import  Phone from '@/components/icons/navbar/mobile/Location.vue';
import Location from '@/components/icons/navbar/mobile/Phone.vue';
import Ornament from '@/components/icons/ornaments/Ornament.vue';

export default {
    props: {
        contacts: Array,
        navList: Array
    },

    components: {
        Location,
        Phone,
        Ornament
    },

    methods: {
        toggleBar () {
            this.$emit('toggleBar');
        }
    }
}

</script>