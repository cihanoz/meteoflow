import type { Translations } from './types';

const sr: Translations = {
    settings: {
        title: 'Подешавања',
        cities: {
            label: 'Градови',
        },
        currentCity: {
            label: "Тренутни град"
        },
        units: {
            label: 'Јединице',
            metric: 'Метрички (°C)',
            imperial: 'Империјални (°F)',
        },
        language: 'Језик',
        theme: {
            label: 'Тема',
            darkMode: 'Тамни режим',
        },
        version: 'MeteoFlow v0.0.1',
    },
    weather: {
        error: 'Грешка при учитавању података о времену',
    },
    languages: {
        'en': 'Енглески',
        'es': 'Шпански',
        'fr': 'Француски',
        'de': 'Немачки',
        'it': 'Италијански',
        // ... add other languages as needed
    }
};

export default sr; 