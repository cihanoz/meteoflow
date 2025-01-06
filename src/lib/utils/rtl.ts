// List of RTL languages
const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur'];

// Check if a language is RTL
export function isRTL(locale: string): boolean {
    return RTL_LANGUAGES.includes(locale);
} 