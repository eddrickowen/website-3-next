import type { en } from './en';
import { id } from './id';

const dictionaries = {
  en: () => import('./en').then((module) => module.en),
  id: () => import('./id').then((module) => module.id),
};

export const getDictionary = async (locale: 'en' | 'id') => {
  return dictionaries[locale]();
};
