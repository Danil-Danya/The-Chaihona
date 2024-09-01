import { createI18n } from "vue-i18n";

import eng from '../locales/english.json';
import rus from '../locales/russian.json';
import uzb from '../locales/uzbek.json';

const i18n = createI18n({
    fallbackLocale: 'rus',
    messages: { eng, rus, uzb }
})

export default i18n;