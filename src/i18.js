import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationRU from './public/locales/ru/translation.json'
import translationEN from './public/locales/en/translation.json'

// the translations
// (tip move them in a JSON file and import them)
// const resources = {
//   ru: {
//     translation: {
//       translation: translationRU
//     }
//   },
//   en: {
//     translation: {
//       translation: translationEN
//     }
//   }
// };

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources,
//     lng: "en",

//     keySeparator: false, // we do not use keys in form messages.welcome

//     interpolation: {
//       escapeValue: false // react already safes from xss
//     }
//   });

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
