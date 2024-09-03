<template>
    <section class="staff">
        <div class="staff__container">
            <div class="container">
                <div class="staff__content">
                    <h2 class="title staff__title">{{ $t('index.staff.title') }}</h2>
                    <div class="staff__text-container">
                        <p class="staff__text staff__text-short">{{ $t('index.staff.textLeft') }}</p>
                        <p class="staff__text staff__text-wide">{{ $t('index.staff.textRight') }}</p>
                    </div>
                </div>
            </div>
            <div class="staff__structure">
                <StaffCard v-for="item in staffList" :employe="item" :key="item"/>
                <div class="staff__structure-text-container">
                    <p class="staff__text">{{ $t('index.staff.text') }}<router-link class="staff__link" to="/about" style="margin-left: 10px;"> {{ $t('index.staff.link') }} </router-link></p>
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
                //class: 'staff__slogan-long',
                img: require('@/assets/images/staff/staff_2.png')
            },
        ],
        staffList1: [
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
    },

    mounted () {
        this.staffList = this.staffList.map((item, index) => {
            const newList = this.$i18n.messages[localStorage.getItem('locale')].index.staff.staffList[index];
            
            item.name = newList.name;
            item.post = newList.post;
            item.experience = newList.experience;
            item.slogan = newList.slogan;

            return item;
        })

        console.log(this.staffList);
        

        this.$nextTick(() => {     
            if (window.innerWidth > 1000) {
                this.$gsap.fromTo('.staff__text-short', {
                    opacity: 0,
                    y: -300,
                }, {
                    scrollTrigger: {
                        trigger: '.staff__container',
                        start: 'center 60%',
                        end: 'bottom 60%',
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                })
                this.$gsap.fromTo('.staff__text-wide', {
                    opacity: 0,
                    y: 300,
                }, {
                    scrollTrigger: {
                        trigger: '.staff__container',
                        start: 'center 60%',
                        end: 'bottom 60%',
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                })
            }   
            else {
                this.$gsap.fromTo('.about__left', {
                    opacity: 0,
                    y: 50,
                }, {
                    scrollTrigger: {
                        trigger: '.about__container',
                        start: 'top 90%',
                        end: 'bottom 60%',
                        //scrub: true
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                })
                this.$gsap.fromTo('.about__right', {
                    opacity: 0,
                    y: 50,
                }, {
                    scrollTrigger: {
                        trigger: '.about__container',
                        start: 'top 90%',
                        end: 'bottom 60%',
                        //scrub: true
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                })
            }  
        })
    }
}

</script>