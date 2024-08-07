<template>
    <div class="buths__create">
        <form class="create__form">
            <div class="buths__create-root">
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">Название кабинки на русском</label>
                    <input type="text" class="input buths__input-globale" ref="emailInput" placeholder="Кабинка 1" v-model="title">
                    <p class="message">{{  }}</p>
                </div>
                <div class="input__container">
                    <label class="input-label" ref="passwordLabel">Колисчество персон</label>
                    <div :type="text" class="input buths__input-persones" ref="passwordInput">
                        <h2 class="create__counter-icon" @click="persones++">
                            <Plus />
                        </h2>
                        <h2 class="create__counter-title">
                            {{ persones }}
                        </h2>
                        <h2 class="create__counter-icon" @click="persones--">
                            <Minus />
                        </h2>
                    </div>
                    <p class="message">{{  }}</p>
                </div>
            </div>
            <div class="buths__titles-lang">
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">Название кабинки на английском</label>
                    <input type="text" class="input buths__input-title" ref="emailInput" placeholder="Buth 1" v-model="titleEng">
                    <p class="message">{{  }}</p>
                </div>
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">Название кабинки на узбекском</label>
                    <input type="text" class="input buths__input-title" ref="emailInput" placeholder="Kabinka 1" v-model="titleUzb">
                    <p class="message">{{  }}</p>
                </div>
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">Название кабинки на айзербайджанском</label>
                    <input type="text" class="input buths__input-title" ref="emailInput" placeholder="Kabin 1" v-model="titleAzb">
                    <p class="message">{{  }}</p>
                </div>
            </div>
            <div class="buths__tour">
                <div class="input__container">
                    <label class="input-label" ref="emailLabel">Ссылка 360° тур</label>
                    <input type="text" class="input buths__input-title" ref="emailInput" placeholder="https://uzbekistan360.uz/ru/location/the-choyxona8z2" v-model="tour">
                    <p class="message">{{  }}</p>
                </div>
            </div>
            <div class="buths__desctiptions">
                <div class="textarea__container">
                    <label class="input-label" ref="emailLabel">Описание на русском</label>
                    <textarea type="text" class="input buths__input-title" ref="emailInput" placeholder="VIP-кабинка на 16 персон с лаунж-зоной. PS5, кальян, настольные игры, доступ к AllPlay, Netflix, ITV." v-model="description"></textarea>
                    <p class="message">{{  }}</p>
                </div>
                <div class="textarea__container">
                    <label class="input-label" ref="emailLabel">Описание на английском</label>
                    <textarea type="text" class="input buths__input-title" ref="emailInput" placeholder="VIP booth for 16 people with a lounge area. PS5, hookah, board games, access to AllPlay, Netflix, ITV." v-model="descriptionEng"></textarea>
                    <p class="message">{{  }}</p>
                </div>
                <div class="textarea__container">
                    <label class="input-label" ref="emailLabel">Описание на узбекском</label>
                    <textarea type="text" class="input buths__input-title" ref="emailInput" placeholder="16 kishilik VIP kabinkasi va lounge zonasi. PS5, shisha, stol o'yinlari, AllPlay, Netflix, ITV ga kirish." v-model="descriptionUzb"></textarea>
                    <p class="message">{{  }}</p>
                </div>
                <div class="textarea__container">
                    <label class="input-label" ref="emailLabel">Описание на айзербайджанском</label>
                    <textarea type="text" class="input buths__input-title" ref="emailInput" placeholder="16 nəfərlik VIP kabin və lounge zonası. PS5, qəlyan, stol oyunları, AllPlay, Netflix, ITV-yə giriş." v-model="descriptionAzb"></textarea>
                    <p class="message">{{  }}</p>
                </div>
            </div>
            <div class="buths__image">
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
            <div class="buths__buttons">
                <div class="create__button-сontainer">
                    <button class="create__button" type="submit" @click.prevent="createBuths">Добавить</button>
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
import axios from '@/api/axios.js';

export default {
    data: () => ({
        url: 'buths',
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
        },

        async createBuths () {
            const { 
                url, 
                persones,
                title,
                titleAzb,
                titleEng,
                titleUzb,
                descprtion,
                descprtionAzb,
                descprtionEng,
                descprtionUzb,
                images
            } = this;

            let descprtions = descprtion.split('\n');
            let descprtionsAzb = descprtionAzb.split('\n');
            let descprtionsEng = descprtionEng.split('\n');
            let descprtionsUzb = descprtionUzb.split('\n');

            try {
                const formData = new FormData();

                formData.append('images', images);
                formData.append('persones', persones);
                formData.append('title', title);
                formData.append('titleAzb', titleAzb);
                formData.append('titleEng', titleEng);
                formData.append('titleUzb', titleUzb);
                formData.append('descprtion', descprtions);
                formData.append('descprtionAzb', descprtionsAzb);
                formData.append('descprtionEng', descprtionsEng);
                formData.append('descprtionUzb', descprtionsUzb);

                const response = await axios.post(url, formData);
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