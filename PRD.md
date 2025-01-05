# MeteoFlow - Weather App PRD

## 1. Overview
MeteoFlow is a Progressive Web App (PWA) that allows users to track weather conditions for multiple cities. Built with SvelteKit and Firebase hosting, it focuses on user experience with fluid animations and offline capabilities.

Domain: meteoflow.web.app

## 2. Target Users
- Primary: Users wanting to track weather in multiple locations
- Secondary: Mobile users who want to install the app on their home screen

## 3. Core Features

### 3.1 City Management
- Overlay interface for adding/removing cities
- Automatically appears when no cities are saved
- Persistence using localStorage
- No geolocation features in initial version
- Close button in top right corner
- Semi-transparent dark background

### 3.2 Weather Display
#### Current Weather
- Background video loops for weather conditions
- Temperature display
- Last update timestamp
- Loading indicator during API calls
- Offline status indicator in top right

#### 3-Day Forecast
- Day/Night temperature splits
- Lottie animations for weather conditions
- Simple card-based layout
- Displayed below current weather

### 3.3 Settings
- Overlay interface matching city management style
- Units toggle (Metric/Imperial)
- Language selection
- Dark/Light mode theme
- Settings persist in localStorage

## 4. Technical Specifications

### 4.1 PWA Features
- Installable to home screen
- Offline capability
- Local data persistence
- Background updates

### 4.2 Data Management
- Weather data cached in localStorage
- Cache lifetime: 1 hour (configurable in config file)
- Auto-refresh in background
- Retry failed API calls every 5 minutes
- Last update timestamp display

### 4.3 API Integration
- Primary: OpenWeatherMap API
- Adapter pattern for API integration
- Possibility to add other weather APIs later
- API keys stored in environment variables
- Error handling at higher level than adapters

### 4.4 Status Indicators
- Loading spinner during API calls
- Offline indicator
- Last update timestamp display ("Last Update: X min. ago")
- No notifications for data updates

## 5. User Interface

### 5.1 Single Page Application
- Main view always shows weather data
- Overlays for city management and settings
- Smooth transitions and animations
- Consistent visual hierarchy

### 5.2 Overlay Systems
1. City Management Overlay
   - Appears automatically when no cities saved
   - Semi-transparent dark background
   - Close button in top right
   - City search and management
   - Add/Remove functionality

2. Settings Overlay
   - Matches city management style
   - Easy access to all preferences
   - Clear section organization

### 5.3 Visual Elements
- Weather condition videos for current weather
- Lottie animations for forecast
- Consistent loading indicators
- Clear status feedback
- Fluid transitions between states

## 6. Data Structures

### 6.1 City Data
```typescript
interface City {
    id: string;
    name: string;
    country: string;
}
```

### 6.2 Weather Data
```typescript
enum WeatherCondition {
    CLEAR = 'clear',
    CLOUDS = 'clouds',
    RAIN = 'rain',
    SNOW = 'snow',
    THUNDERSTORM = 'thunderstorm',
    DRIZZLE = 'drizzle',
    MIST = 'mist'
}

interface CurrentWeather {
    temperature: number;
    condition: WeatherCondition;
    lastUpdated: Date;
}

interface DayForecast {
    date: Date;
    dayTemp: number;
    nightTemp: number;
    condition: WeatherCondition;
}
```

### 6.3 API Interface
```typescript
interface WeatherAdapter {
    getCurrentWeather(cityId: string): Promise<CurrentWeather>;
    getForecast(cityId: string): Promise<DayForecast[]>;
}

interface WeatherError {
    message: string;
    code: string;
    isNetworkError: boolean;
}
```

## 7. Configuration
```typescript
interface Config {
    apiRefreshRate: number;         // Default: 1 hour
    apiRetryInterval: number;       // Default: 5 minutes
    weatherAdapter: 'openweather';  // Future: 'weatherapi'
    defaultUnits: 'metric' | 'imperial';
    defaultLanguage: string;
}
```

## 8. Future Considerations
- Additional weather metrics (humidity, wind speed, precipitation)
- Geolocation support
- Multiple API provider support
- Push notifications
- Additional languages
- More detailed forecasts
- Weather alerts
- Weather maps integration

## 9. Success Metrics
- Successful API calls rate
- Cache hit rate
- User engagement with city management
- Settings changes frequency
- App install rate (PWA)
- Time spent on app
- Number of cities per user