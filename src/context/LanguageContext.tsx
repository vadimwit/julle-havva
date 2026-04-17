import { createContext, useContext, useCallback, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

export type Lang = 'en' | 'pt';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
});

function isLang(value: string | null): value is Lang {
  return value === 'en' || value === 'pt';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramLang = searchParams.get('lang');
  const lang: Lang = isLang(paramLang) ? paramLang : 'en';

  const setLang = useCallback((newLang: Lang) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('lang', newLang);
      return next;
    }, { replace: true });
  }, [setSearchParams]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
