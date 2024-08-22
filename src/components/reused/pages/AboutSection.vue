<template>
    <section class="about">
        <div class="about__container">
            <div class="container">
                <div class="about__content">
                    <div class="about__left">
                        <div class="adbout__logo-container">
                            <img src="@/assets/images/about/logo.svg" alt="Logo" class="about__logo">
                        </div>
                        <p class="about__text">это слияние восточных традиций и западных трендов, а также широкий ассортимент блюд национальной и европейской кухни.</p>
                    </div>
                    <div class="about__right">
                        <p class="about__text">Ресторан нового формата — это про атмосферу, эстетическое удовольствие, комфорт и ощущение уверенности в пространстве, сервисе и кухне. Одним из заведений, соответствующих требованиям новой реальности, является <strong>The Choyxona.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted () {
        this.$nextTick(() => {       
            if (window.innerWidth > 1000) {
                this.$gsap.fromTo('.about__left', {
                    opacity: 0,
                    x: -300,
                }, {
                    scrollTrigger: {
                        trigger: '.about__container',
                        start: 'top 90%',
                        end: 'bottom 60%',
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.3,
                })
                this.$gsap.fromTo('.about__right', {
                    opacity: 0,
                    x: 300,
                }, {
                    scrollTrigger: {
                        trigger: '.about__container',
                        start: 'top 90%',
                        end: 'bottom 60%',
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.3,
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