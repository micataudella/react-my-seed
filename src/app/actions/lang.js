export function getClientLanguage() {
  // const lang = 'en'; // debug
  const lang = navigator.language || navigator.userLanguage;
  return lang.substr(0, 2);
}

export function getUserLanguage() {
  return window.localStorage.getItem('lang');
}

export function setUserLanguage(lang) {
  window.localStorage.setItem('lang', lang);
}

export const defaultLang = 'en';
