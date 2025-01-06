import type { Translations } from './types';

const el: Translations = {
    settings: {
        title: 'Ρυθμίσεις',
        cities: {
            label: 'Πόλεις',
        },
        currentCity: {
            label: 'Τρέχουσα πόλη',
        },
        units: {
            label: 'Μονάδες',
            metric: 'Μετρικό (°C)',
            imperial: 'Αγγλοσαξονικό (°F)',
        },
        language: 'Γλώσσα',
        theme: {
            label: 'Θέμα',
            darkMode: 'Σκοτεινή λειτουργία',
        },
        version: 'MeteoFlow v0.0.1',
    },
    weather: {
        error: 'Αποτυχία φόρτωσης δεδομένων καιρού',
    },
};

export default el; 