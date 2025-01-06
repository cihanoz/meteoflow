import type { Translations } from './types';

const uk: Translations = {
    settings: {
        title: 'Налаштування',
        cities: {
            label: 'Міста',
        },
        currentCity: {
            label: 'Поточне місто',
        },
        units: {
            label: 'Одиниці виміру',
            metric: 'Метричні (°C)',
            imperial: 'Імперські (°F)',
        },
        language: 'Мова',
        theme: {
            label: 'Тема',
            darkMode: 'Темний режим',
        },
        version: 'MeteoFlow v0.0.1',
    },
    weather: {
        error: 'Не вдалося завантажити дані про погоду',
    },
};

export default uk; 