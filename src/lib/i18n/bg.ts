import type { Translations } from './types';

const bg: Translations = {
    settings: {
        title: 'Настройки',
        cities: {
            label: 'Градове',
        },
        currentCity: {
            label: 'Текущ град',
        },
        units: {
            label: 'Мерни единици',
            metric: 'Метрични (°C)',
            imperial: 'Имперски (°F)',
        },
        language: 'Език',
        theme: {
            label: 'Тема',
            darkMode: 'Тъмен режим',
        },
        version: 'MeteoFlow v0.0.1',
    },
    weather: {
        error: 'Грешка при зареждане на метеорологичните данни',
    },
};

export default bg; 