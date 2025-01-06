import type { Translations } from './types';

const ru: Translations = {
    settings: {
        title: 'Настройки',
        units: {
            label: 'Единицы измерения',
            metric: 'Метрические (°C)',
            imperial: 'Имперские (°F)',
        },
        language: 'Язык',
        theme: {
            label: 'Тема',
            darkMode: 'Тёмная тема',
        },
        version: 'MeteoFlow v0.0.1',
    },
    weather: {
        error: 'Не удалось загрузить данные о погоде',
    },
};

export default ru; 