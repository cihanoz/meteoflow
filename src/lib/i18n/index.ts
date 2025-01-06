import { derived, writable } from 'svelte/store';
import type { Translations } from './types';
import en from './en';
import de from './de';
import es from './es';
import fr from './fr';
import it from './it';
import nl from './nl';
import pt from './pt';
import ru from './ru';
import ja from './ja';
import zh from './zh';
import ar from './ar';
import ko from './ko';
import bn from './bn';
import bg from './bg';
import cs from './cs';
import fi from './fi';
import el from './el';
import hi from './hi';
import hu from './hu';
import tr from './tr';
import uk from './uk';
import vi from './vi';
import zh_tw from './zh_tw';

export const translations: Record<string, Translations> = {
    en,
    de,
    es,
    fr,
    it,
    nl,
    pt,
    ru,
    ja,
    zh,
    ar,
    ko,
    bn,
    bg,
    cs,
    fi,
    el,
    hi,
    hu,
    tr,
    uk,
    vi,
    zh_tw,
};

export const locale = writable('en');
export const t = derived(locale, ($locale) => translations[$locale]); 