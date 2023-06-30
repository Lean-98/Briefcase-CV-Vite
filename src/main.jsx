import React from 'react'
import ReactDOM from 'react-dom/client'
import { BriefcaseApp } from './BriefcaseApp';
import './style.css';
import globales_en from './translations/en/global.json';
import globales_es from './translations/es/global.json';
import globales_pt from './translations/pt/global.json';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("lng") || "es",
  resources: {
    es: {
      global: globales_es
    },
    en: {
      global: globales_en
    },
    pt: {
      global: globales_pt
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={ i18next }>
      <BriefcaseApp />
    </I18nextProvider>
  </React.StrictMode>,
)
