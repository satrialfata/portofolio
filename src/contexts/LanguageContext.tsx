"use client";

import { createContext, useContext, useSyncExternalStore, useCallback, type ReactNode } from "react";
import id from "@/translations/id";
import en from "@/translations/en";

type Lang = "id" | "en";
type Translations = typeof id;
const dictionaries = { id, en } as unknown as Record<Lang, Translations>;

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getSnapshot(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("language");
  return stored === "id" ? "id" : "en";
}

function getServerSnapshot(): Lang {
  return "en";
}

let listeners: Array<() => void> = [];
function emitChange() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((l: Lang) => {
    localStorage.setItem("language", l);
    document.documentElement.lang = l === "id" ? "id" : "en";
    emitChange();
  }, []);

  const value: LanguageContextValue = {
    lang,
    t: dictionaries[lang],
    setLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}
