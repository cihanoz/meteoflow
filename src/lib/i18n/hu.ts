import type { Translations } from './types';

const hu: Translations = {
    settings: {
        title: 'Beállítások',
        cities: {
            label: 'Városok',
        },
        currentCity: {
            label: 'Jelenlegi város',
        },
        units: {
            label: 'Mértékegységek',
            metric: 'Metrikus (°C)',
            imperial: 'Angolszász (°F)',
        },
        language: 'Nyelv',
        theme: {
            label: 'Téma',
            darkMode: 'Sötét mód',
        },
        version: 'MeteoFlow v0.0.1',
    },
    weather: {
        error: 'Nem sikerült betölteni az időjárási adatokat',
    },
};

export default hu; 