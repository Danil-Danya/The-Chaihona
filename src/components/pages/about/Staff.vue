<template>
    <section class="staff">
        <div class="staff__container">
            <div class="container">
                <div class="staff__content">
                    <h2 class="title staff__title">Золотые руки</h2>
                </div>
                <div class="staff__structure">
                    <StaffCard v-for="item in staffList" :employe="item" :key="item"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import StaffCard from '@/components/reused/pages/StafCard.vue';

export default {
    data: () => ({
        staffList: [
            { 
                name: 'Абдукарим Абдурасулов' ,
                post: 'Шеф-повар •',
                experience: 'стаж 5 лет',
                slogan: 'Джедай кухни',
                img: require('@/assets/images/staff/staff_1.png')
            },
            { 
                name: 'Абдукарим Абдурасулов' ,
                post: 'Помощник повара •',
                experience: 'стаж 5 лет',
                slogan: 'Главный по плову',
                class: 'staff__slogan-long',
                img: require('@/assets/images/staff/staff_2.png')
            },
            { 
                name: 'Абдукарим Абдурасулов' ,
                post: 'Шеф-повар •',
                experience: 'стаж 5 лет',
                slogan: 'Джедай кухни',
                img: require('@/assets/images/staff/staff_3.png')
            },
            { 
                name: 'Абдукарим Абдурасулов' ,
                post: 'Су-шеф •',
                experience: 'стаж 5 лет',
                slogan: 'Чайханщик',
                class: 'staff__slogan-short',
                img: require('@/assets/images/staff/staff_4.png')
            },
            { 
                name: 'Абдукарим Абдурасулов' ,
                post: 'Шеф-повар •',
                experience: 'стаж 5 лет',
                slogan: 'Юный подаван',
                img: require('@/assets/images/staff/staff_5.png')
            },
        ],
    }),

    components: {
        StaffCard 
    }
}

</script>