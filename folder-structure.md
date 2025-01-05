src/
├── lib/
│   ├── components/
│   │   ├── city/
│   │   │   ├── CityCard.svelte
│   │   │   ├── CityList.svelte
│   │   │   └── CitySearch.svelte
│   │   ├── forecast/
│   │   │   ├── DayForecast.svelte
│   │   │   └── ForecastList.svelte
│   │   ├── overlay/
│   │   │   ├── BaseOverlay.svelte
│   │   │   └── OverlayContainer.svelte
│   │   ├── ui/
│   │   │   ├── Button.svelte
│   │   │   ├── LoadingSpinner.svelte
│   │   │   └── StatusIndicator.svelte
│   │   └── weather/
│   │       ├── CurrentWeather.svelte
│   │       └── WeatherAnimation.svelte
│   ├── stores/
│   │   ├── cities.ts
│   │   ├── settings.ts
│   │   ├── theme.ts
│   │   └── weather.ts
│   ├── services/
│   │   ├── adapters/
│   │   │   ├── openweather.ts
│   │   │   └── weatherapi.ts
│   │   ├── api.ts
│   │   └── storage.ts
│   ├── types/
│   │   ├── weather.ts
│   │   ├── config.ts
│   │   └── adapters.ts
│   ├── utils/
│   │   ├── date.ts
│   │   └── temperature.ts
│   └── constants.ts
├── routes/
│   ├── +layout.svelte
│   ├── +layout.ts
│   ├── +page.svelte
│   ├── +page.ts
│   └── settings/
│       ├── +page.svelte
│       └── +page.ts
└── app.html

static/
├── animations/
│   └── weather/
├── videos/
│   └── weather/
└── manifest.json 