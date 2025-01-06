import type { Translations } from './types';

const ro: Translations = {
    settings: {
        title: 'Setări',
        cities: {
            label: 'Orașe',
        },
        currentCity: {
            label: "Orașul curent"
        },
        units: {
            label: 'Unități',
            metric: 'Metric (°C)',
            imperial: 'Imperial (°F)',
        },
        language: 'Limbă',
        theme: {
            label: 'Temă',
            darkMode: 'Mod întunecat',
        },
        version: 'MeteoFlow v0.0.1',
    },
    weather: {
        error: 'Eroare la încărcarea datelor meteo',
    },
    languages: {
        'en': 'Engleză',
        'es': 'Spaniolă',
        'fr': 'Franceză',
        'de': 'Germană',
        'it': 'Italiană',
        // ... add other languages as needed
    }
};

export default ro; 