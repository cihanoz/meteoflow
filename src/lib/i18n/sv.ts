import type { Translations } from './types';

const sv: Translations = {
    settings: {
        title: 'Inställningar',
        cities: {
            label: 'Städer',
        },
        currentCity: {
            label: "Aktuell stad"
        },
        units: {
            label: 'Enheter',
            metric: 'Metrisk (°C)',
            imperial: 'Brittisk (°F)',
        },
        language: 'Språk',
        theme: {
            label: 'Tema',
            darkMode: 'Mörkt läge',
        },
        version: 'MeteoFlow v0.0.1',
    },
    weather: {
        error: 'Det gick inte att ladda väderdata',
    },
    languages: {
        'en': 'Engelska',
        'es': 'Spanska',
        'fr': 'Franska',
        'de': 'Tyska',
        'it': 'Italienska',
        // ... add other languages as needed
    }
};

export default sv; 