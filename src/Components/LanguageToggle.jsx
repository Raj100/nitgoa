import React, { useState } from 'react';
import translate from '../assets/Translation.png';
import { useTranslation } from 'react-i18next';

const LanguageTranslator = () => {
  const {i18n} = useTranslation();
  const [language, setLanguage] = useState('en'); // Default language is English
  const [txtLang, setTextLang] = useState('English');

  const toggleLanguage = () => {
    if(language === 'en') {
        setLanguage('hi');
        setTextLang('हिन्दी');
    }

    else if(language === 'hi') {
        setLanguage('en');
        setTextLang('English');
    }

    i18n.changeLanguage(language);
  };

  return (
    <div className="flex justify-center items-center" onClick={toggleLanguage}>
      <img className="w-6 mr-2" src={translate} alt="flag" />
      <p className='cursor-pointer font-bold hover:bg-'>{txtLang}</p>
    </div>
  );
};

export default LanguageTranslator;