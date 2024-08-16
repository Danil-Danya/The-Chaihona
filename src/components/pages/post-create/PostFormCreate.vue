<template>
    <div class="product__create">
        <form class="create__form">
            <div class="product__titles-lang">
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">Название поста на русском</label>
                    <input type="text" class="input product__input-title" ref="emailInput" placeholder="Роман Сайфулин об уходе из Makro, открытии The Choyxona ресторане на берегу моря за $1 млн и мечтах о бане" v-model="titleEng">
                    <p class="message">{{  }}</p>
                </div>
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">Название поста на английском</label>
                    <input type="text" class="input product__input-title" ref="emailInput" placeholder="Roman Saifullin on Leaving Makro, Opening The Choyxona Restaurant by the Sea for $1 Million, and Dreams of a Bathhouse" v-model="titleEng">
                    <p class="message">{{  }}</p>
                </div>
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">Название поста на узбекском</label>
                    <input type="text" class="input product__input-title" ref="emailInput" placeholder="Roman Sayfullin Makrodan ketishi, dengiz bo'yidagi $1 millionlik The Choyxona restoranini ochishi va hammom haqidagi orzulari haqida" v-model="titleUzb">
                    <p class="message">{{  }}</p>
                </div>
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">Название поста на айзербайджанском</label>
                    <input type="text" class="input product__input-title" ref="emailInput" placeholder="Roman Sayfullin Makrodan ayrılması, dəniz kənarında $1 milyonluq The Choyxona restoranının açılması və hamam haqqında arzuları" v-model="titleAzb">
                    <p class="message">{{  }}</p>
                </div>
            </div>
            <div class="product__image">
                <div class="create__image-view">
                    <div class="create__image-preview" v-for="(item, index) in blobs" :key="item">
                        <img :src="item" alt="Preview" class="create__image-img" @click="deleteImage(index)">
                    </div>
                </div>
                <div class="create__image">
                    <input type="file" multiple accept=".jpg, .png" class="create__image-input" @input="setImages($event)">
                    <div>
                        <Images />
                    </div>
                    <p class="create__image-text">Выберите изображения</p>
                </div>
            </div>
            <div class="product__desctiptions">
                <div class="textarea__container">
                    <label class="input-label" ref="emailLabel">Описание на русском</label>
                    <textarea type="text" class="input product__input-title" ref="emailInput" v-model="description"></textarea>
                    <p class="message">{{  }}</p>
                </div>
                <div class="textarea__container">
                    <label class="input-label" ref="emailLabel">Описание на английском</label>
                    <textarea type="text" class="input product__input-title" ref="emailInput" v-model="descriptionEng"></textarea>
                    <p class="message">{{  }}</p>
                </div>
                <div class="textarea__container">
                    <label class="input-label" ref="emailLabel">Описание на узбекском</label>
                    <textarea type="text" class="input product__input-title" ref="emailInput" v-model="descriptionUzb"></textarea>
                    <p class="message">{{  }}</p>
                </div>
                <div class="textarea__container">
                    <label class="input-label" ref="emailLabel">Описание на айзербайджанском</label>
                    <textarea type="text" class="input product__input-title" ref="emailInput" v-model="descriptionAzb"></textarea>
                    <p class="message">{{  }}</p>
                </div>
            </div>
            <div class="product__video">
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">HTML код с YouTube</label>
                    <input type="text" class="input product__input-title" ref="emailInput" placeholder="<iframe width='1280' height='720' src='https://www.youtube.com/embed/u2aoDYDS2U4' title='Роман с Чайхоной. Как Роман Сайфулин смог всех удивить'> </iframe>" v-model="tour">
                    <p class="message">{{  }}</p>
                </div>
            </div>
            <div class="product__buttons">
                <div class="create__button-сontainer">
                    <button class="create__button" type="submit" @submit.prevent="">Добавить</button>
                    <button class="create__button" @click.prevent="clearAll">Очистить</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import Plus from '@/components/icons/Plus.vue';
import Minus from '@/components/icons/Minus.vue';
import Images from '@/components/icons/Images.vue';

export default {
    data: () => ({
        persones: 10,
        title: '',
        titleEng: '',
        titleUzb: '',
        titleAzb: '',
        descprtion: '',
        descprtionUzb: '',
        descprtionEng: '',
        descprtionAzb: '',
        images: [],
        blobs: []
    }),

    components: {
        Plus,
        Minus,
        Images
    },

    methods: {
        setImages (event) {
            this.images = Array.from(event.target.files);
            this.images.forEach(file => {
                this.blobs.push(URL.createObjectURL(file));
            })
            console.log(this.blobs);
        },

        deleteImage (index) {
            this.images.splice(index, 1);
            this.blobs.splice(index, 1);
        },

        clearAll () {
            this.title = '';
            this.titleEng = '';
            this.titleUzb = '';
            this.titleAzb = '';
            this.descprtion = '';
            this.descprtionUzb = '';
            this.descprtionEng = '';
            this.descprtionAzb = '';
            this.images = [];
            this.blobs = [];        
        }
    },
}
</script>