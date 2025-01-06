import type { Translations } from './types';

const sk: Translations = {
    settings: {
        title: 'Nastavenia',
        cities: {
            label: 'Mestá',
        },
        currentCity: {
            label: "Aktuálne mesto"
        },
        units: {
            label: 'Jednotky',
            metric: 'Metrické (°C)',
            imperial: 'Imperiálne (°F)',
        },
        language: 'Jazyk',
        theme: {
            label: 'Téma',
            darkMode: 'Tmavý režim',
        },
        version: 'MeteoFlow v0.0.1',
    },
    weather: {
        error: 'Nepodarilo sa načítať údaje o počasí',
    },
    languages: {
        'en': 'Angličtina',
        'es': 'Španielčina',
        'fr': 'Francúzština',
        'de': 'Nemčina',
        'it': 'Taliančina',
        // ... add other languages as needed
    }
};

export default sk; 