export interface Translations {
    settings: {
        title: string;
        units: {
            label: string;
            metric: string;
            imperial: string;
        };
        language: string;
        theme: {
            label: string;
            darkMode: string;
        };
        version: string;
    };
    weather: {
        error: string;
    };
    languages?: {
        [key: string]: string;
    };
} 