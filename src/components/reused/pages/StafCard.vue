<template>
    <div class="staff__item">
        <p :class="employe.class" class="staff__slogan"> {{ employe.slogan }} </p>
        <img :src="employe.img" alt="Avatar" class="staff__portret">
        <div class="staff__structure-content">
            <div class="staff__structure-container">
                <h2 class="staff__name"> {{ employe.name }} </h2>
                <div class="staff__structure-info">
                    <p class="staff__post"> {{ employe.post }} </p>
                    <p class="staff__experience"> {{ employe.experience }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        employe: Object
    }
}

</script>