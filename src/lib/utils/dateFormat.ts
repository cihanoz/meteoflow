export function formatDate(date: Date, locale: string): string {
    return new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

export function formatTime(date: Date, locale: string): string {
    return new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        minute: 'numeric',
        hour12: locale === 'en'  // Use 12-hour format only for English
    }).format(date);
} 