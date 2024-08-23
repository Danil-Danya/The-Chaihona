<template>
    <div class="product__create">
        <form class="create__form">
            <div class="product__titles-lang">
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">URL адрес поста</label>
                    <input type="text" class="input product__input-title" ref="emailInput" placeholder="roman-sayfulin-ob-uhode-iz-makro" v-model="unicalUrl">
                    <p class="message">{{  }}</p>
                </div>
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">Название поста на русском</label>
                    <input type="text" class="input product__input-title" ref="emailInput" placeholder="Роман Сайфулин об уходе из Makro, открытии The Choyxona ресторане на берегу моря за $1 млн и мечтах о бане" v-model="title">
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
                    <textarea type="text" class="input product__input-title" ref="emailInput" v-model="descprtion"></textarea>
                    <p class="message">{{  }}</p>
                </div>
                <div class="textarea__container">
                    <label class="input-label" ref="emailLabel">Описание на английском</label>
                    <textarea type="text" class="input product__input-title" ref="emailInput" v-model="descprtionEng"></textarea>
                    <p class="message">{{  }}</p>
                </div>
                <div class="textarea__container">
                    <label class="input-label" ref="emailLabel">Описание на узбекском</label>
                    <textarea type="text" class="input product__input-title" ref="emailInput" v-model="descprtionUzb"></textarea>
                    <p class="message">{{  }}</p>
                </div>
                <div class="textarea__container">
                    <label class="input-label" ref="emailLabel">Описание на айзербайджанском</label>
                    <textarea type="text" class="input product__input-title" ref="emailInput" v-model="descprtionAzb"></textarea>
                    <p class="message">{{  }}</p>
                </div>
            </div>
            <div class="product__video">
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">HTML код с YouTube</label>
                    <input type="text" class="input product__input-title" ref="emailInput" placeholder="<iframe width='1280' height='720' src='https://www.youtube.com/embed/u2aoDYDS2U4' title='Роман с Чайхоной. Как Роман Сайфулин смог всех удивить'> </iframe>" v-model="video">
                    <p class="message">{{  }}</p>
                </div>
                <!-- <div class="textarea__container">
                    <label class="input-label" ref="emailLabel">Ссылки на похожие видео</label>
                    <textarea type="text" class="input product__input-title" ref="emailInput" v-model="videosLink"></textarea>
                    <p class="message">{{  }}</p>
                </div> -->
            </div>
            <div class="product__buttons">
                <div class="create__button-сontainer">
                    <button class="create__button" type="submit" @click.prevent="createPost">Добавить</button>
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

import axios from '@/api/axios';

export default {
    data: () => ({
        title: '',
        titleEng: '',
        titleUzb: '',
        titleAzb: '',
        descprtion: '',
        descprtionUzb: '',
        descprtionEng: '',
        descprtionAzb: '',
        video: '',
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
            const images = Array.from(event.target.files);
            images.forEach((file) => {
                this.blobs.push(URL.createObjectURL(file));
                this.images.push(file);
            });
        },

        generatePostUrl() {
            this.unicalUrl = this.unicalUrl.replace(/[^a-zA-Z0-9\s]/g, '');
            this.unicalUrl = this.unicalUrl.replace(/\s+/g, '-');
        },

        async createPost () {
            this.generatePostUrl();
            
            const {
                title,
                titleEng,
                titleUzb,
                titleAzb,
                descprtion,
                descprtionUzb,
                descprtionEng,
                descprtionAzb,
                unicalUrl,
                video,
                images,
            } = this;

            let descprtions = descprtion ? descprtion.split("\n") : [descprtion];
            let descprtionsAzb = descprtionAzb ? descprtionAzb.split("\n") : [descprtionAzb];
            let descprtionsEng = descprtionEng ? descprtionEng.split("\n") : [descprtionEng];
            let descprtionsUzb = descprtionUzb ? descprtionUzb.split("\n") : [descprtionUzb];


            try {
                const formData = new FormData();

                formData.append('title', title);
                formData.append('unicalUrl', unicalUrl);
                formData.append('titleEng', titleEng);
                formData.append('titleUzb', titleUzb);
                formData.append('titleAzb', titleAzb);
                formData.append('description', JSON.stringify(descprtions));
                formData.append('descriptionEng', JSON.stringify(descprtionsEng));
                formData.append('descriptionUzb', JSON.stringify(descprtionsUzb));
                formData.append('descriptionAzb', JSON.stringify(descprtionsAzb));
                formData.append('video', video);
                formData.append('image', images[0])

                const params = {
                    region: localStorage.getItem('region')
                }

                const response = await axios.post('posts', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    params
                });

                if (response.status === 200) {
                    location.reload();
                }
            }
            catch (error) {
                console.log(error);
            }
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