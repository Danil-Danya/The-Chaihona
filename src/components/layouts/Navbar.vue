<template>
    <section class="navbar">
        <div class="navbar__container">
            <div class="navbar__search">
                <form class="navbar__search-form">
                    <input type="text" class="navbar__search-input" placeholder="Введите запрос">
                </form>
            </div>
            <div class="navbar__settings">
                <div class="navbar__region">
                    <div class="navbar__region-switcher">
                        <span class="navbar__switch-active navbar__switch" ref="buttonUz" @click="changeRegion('uzb')">Узбекистан</span>
                        <span class="navbar__switch-disactive navbar__switch" ref="buttonAz"  @click="changeRegion('azb')">Азербайджан</span>
                    </div>
                </div>
                <div class="navbar__account">
                    <span class="navbar__account-text" @click="logout">Выйти</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    methods: {
        logout () {
            localStorage.removeItem('token');

            if (!localStorage.getItem('token')) {
                this.$router.push('/login');
            }
        },

        changeRegion (button) {
            const { buttonAz, buttonUz } = this.$refs;

            if (button === 'azb') {
                localStorage.setItem('region', 'azb');

                buttonUz.classList.remove('navbar__switch-active');
                buttonUz.classList.add('navbar__switch-disactive');
                buttonAz.classList.add('navbar__switch-active');
            }

            if (button === 'uzb') {
                localStorage.setItem('region', 'uzb');

                buttonAz.classList.remove('navbar__switch-active');
                buttonAz.classList.add('navbar__switch-disactive');
                buttonUz.classList.add('navbar__switch-active');
            }
        }
    },

    mounted () {
        if (!localStorage.getItem('region')) {
            localStorage.setItem('region', 'uzb');
        }
    }
}

</script>