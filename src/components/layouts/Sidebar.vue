<template>
    <section class="sidebar">
        <div class="sidebar__logo">
            <img src="@/assets/images/side-logo.png" alt="Logo" class="sidebar__logo-img">
        </div>
        <div class="sidevar__nav">
            <nav class="nav">
                <ul class="sidebar__nav-list">
                    <li v-for="link in links" :key="link" class="sidebar__nav-li">
                        <router-link :to="link.path" class="sidebar__nav-link">{{ link.text }}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>

export default {
    data: () => ({
        links: [
            { path: '/buths', text: 'Кабинки' },
            { path: '/products', text: 'Кухня' },
            { path: '/posts', text: 'Блог' }
        ]
    })
}

</script>