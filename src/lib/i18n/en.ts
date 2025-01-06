import type { Translations } from './types';

const en: Translations = {
    settings: {
        title: 'Settings',
        units: {
            label: 'Units',
            metric: 'Metric (°C)',
            imperial: 'Imperial (°F)',
        },
        language: 'Language',
        theme: {
            label: 'Theme',
            darkMode: 'Dark Mode',
        },
        version: 'MeteoFlow v0.0.1',
    },
    weather: {
        error: 'Failed to load weather data',
    },
    languages: {
        'en': 'English',
        'es': 'Spanish',
        'fr': 'French',
        'de': 'German',
        'it': 'Italian',
        // ... add other languages as needed
    }
};

export default en; 