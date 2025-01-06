import type { Translations } from './types';

const cs: Translations = {
    settings: {
        title: 'Nastavení',
        cities: {
            label: 'Města',
        },
        currentCity: {
            label: 'Aktuální město',
        },
        units: {
            label: 'Jednotky',
            metric: 'Metrické (°C)',
            imperial: 'Imperiální (°F)',
        },
        language: 'Jazyk',
        theme: {
            label: 'Motiv',
            darkMode: 'Tmavý režim',
        },
        version: 'MeteoFlow v0.0.1',
    },
    weather: {
        error: 'Nepodařilo se načíst data o počasí',
    },
};

export default cs; 