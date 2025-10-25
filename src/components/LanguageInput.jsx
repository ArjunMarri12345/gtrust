// src/components/LanguageInput.jsx

import React, { useState } from 'react';
import '../css/FormStyles.css';

function LanguageInput({ onLanguagesChange }) {
  const [inputValue, setInputValue] = useState('');
  const [languages, setLanguages] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addLanguage = (language) => {
    const trimmedLang = language.trim();
    if (trimmedLang && !languages.includes(trimmedLang)) {
      const newLanguages = [...languages, trimmedLang];
      setLanguages(newLanguages);
      onLanguagesChange(newLanguages); // Notify parent
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault(); 
      addLanguage(inputValue.replace(/,$/, ''));
      setInputValue('');
    }
  };

  const removeLanguage = (langToRemove) => {
    const newLanguages = languages.filter(lang => lang !== langToRemove);
    setLanguages(newLanguages);
    onLanguagesChange(newLanguages); // Notify parent
  };

  return (
    <div className="form-group">
      <label htmlFor="languages-known">Languages Known *</label>
      <div className="language-tags-container">
        {languages.map((lang) => (
          <span key={lang} className="language-tag">
            {lang}
            <button type="button" onClick={() => removeLanguage(lang)} className="remove-tag-btn">
              &times;
            </button>
          </span>
        ))}
        <input
          id="languages-known"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a language and press Enter or comma to add"
          className="language-input-field"
        />
      </div>
      <small>Press Enter or comma (,) after each language</small>
    </div>
  );
}

export default LanguageInput;