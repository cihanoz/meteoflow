import type { CitySearchResult } from '$lib/services/weather';
import { writable } from 'svelte/store';

export interface Settings {
  units: 'metric' | 'imperial';
  language: string;
  darkMode: boolean;
  currentCity: CitySearchResult;
}

const DEFAULT_SETTINGS: Settings = {
  units: 'metric',
  language: 'en',
  darkMode: false,
  currentCity: {
    country: "United Kingdom",
    id: 2801268,
    lat: 51.52,
    lon: -0.11,
    name: "London",
    region: "City of London, Greater London",
    url: "london-city-of-london-greater-london-united-kingdom",
  },
};

function createSettingsStore() {
  // Try to load settings from localStorage
  const savedSettings = typeof localStorage !== 'undefined' 
    ? localStorage.getItem('settings')
    : null;
  
  const initialSettings: Settings = savedSettings 
    ? JSON.parse(savedSettings)
    : DEFAULT_SETTINGS;

  const { subscribe, set, update } = writable<Settings>(initialSettings);

  return {
    subscribe,
    setUnits: (units: Settings['units']) => {
      update(settings => {
        const newSettings = { ...settings, units };
        localStorage.setItem('settings', JSON.stringify(newSettings));
        return newSettings;
      });
    },
    setLanguage: (language: string) => {
      update(settings => {
        const newSettings = { ...settings, language };
        localStorage.setItem('settings', JSON.stringify(newSettings));
        return newSettings;
      });
    },
    setDarkMode: (darkMode: boolean) => {
      update(settings => {
        const newSettings = { ...settings, darkMode };
        localStorage.setItem('settings', JSON.stringify(newSettings));
        return newSettings;
      });
    },
    setCurrentCity: (city: CitySearchResult) => {
      update(settings => {
        const newSettings = { ...settings, currentCity: city };
        localStorage.setItem('settings', JSON.stringify(newSettings));
        return newSettings;
      });
    },
    reset: () => {
      set(DEFAULT_SETTINGS);
      localStorage.setItem('settings', JSON.stringify(DEFAULT_SETTINGS));
    }
  };
}

export const settings = createSettingsStore(); 