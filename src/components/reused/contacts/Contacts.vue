<template>
    <section class="contacts">
        <div class="container">
            <h2 class="title contacts__title">Ждём вас по адресу</h2>
            <div class="contacts__content">
                <div class="contacts__left">
                    <ul class="contacts__list">
                        <li class="contacts__string" v-for="item in contactsList" :key="item">
                            <span class="contacts__string-icon">
                                <component :is="item.icon" />
                            </span>
                            <p class="contacts__text">{{ item.text }}</p>
                        </li>
                    </ul>
                    <ul class="contacts__list-icons">
                        <li class="contacts__string-icon" v-for="item in mapList" :key="item">
                            <a :href="item.link">
                                <span class="contacts__icon">
                                    <component :is="item.icon" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="contacts__right">
                    <div class="contacts__map">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0ab41ecb8a03cda412503f828d51347745ed3a1a0e63ff493426a99b0f13f004&amp;source=constructor" :width="width > 960 ? 510 : '100%'" height="275" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Google from '@/components/icons/contacts/Google.vue';
import Yandex from '@/components/icons/contacts/Yandex.vue';
import Tripadvisor from '@/components/icons/contacts/Tripadvisor.vue';
import Time from '@/components/icons/contacts/Time.vue';
import Location from '@/components/icons/contacts/Location.vue';
import Phone from '@/components/icons/contacts/Phone.vue';

export default {
    data: () => ({
        width: window.innerWidth,
        contactsList: [
            { icon: 'Location', text: 'Ташкент, пр. Богишамол, 131' },
            { icon: 'Phone', text: '+998 (99) 844-88-88' },
            { icon: 'Time', text: 'Каждый день с 08:00 - 23:00' },
        ],
        mapList: [
            { icon: 'Yandex', link: 'https://yandex.uz/maps/org/the_choyxona/193687795731/?ll=69.314788%2C41.332788&z=17' },
            { icon: 'Tripadvisor', link: 'https://www.tripadvisor.ru/Restaurant_Review-g293968-d24062543-Reviews-The_Choyxona-Tashkent_Tashkent_Province.html' },
            { icon: 'Google', link: 'https://maps.app.goo.gl/yksHkoyjgfVCD4qt6' },
        ]
    }),

    components: {
        Google,
        Yandex,
        Tripadvisor,
        Time,
        Location,
        Phone
    }
}

</script>
