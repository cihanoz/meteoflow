import type { Translations } from './types';

const ja: Translations = {
    settings: {
        title: '設定',
        cities: {
            label: '都市',
        },
        currentCity: {
            label: '現在の都市',
        },
        units: {
            label: '単位',
            metric: 'メートル法 (°C)',
            imperial: 'ヤード・ポンド法 (°F)',
        },
        language: '言語',
        theme: {
            label: 'テーマ',
            darkMode: 'ダークモード',
        },
        version: 'MeteoFlow v0.0.1',
    },
    weather: {
        error: '天気データを読み込めませんでした',
    },
};

export default ja; 