import React, { useState } from 'react';
import LanguageInput from './LanguageInput';
import '../css/FormStyles.css';

// 🎯 Temporary function for json-server simulation (sends JSON, excludes File object)
const SIMULATION_API_URL = "http://localhost:5000/applications";

async function postDataForSimulation(data) {
  const response = await fetch(SIMULATION_API_URL, {
    method: 'POST',
    // CRUCIAL: Tell the server we are sending pure JSON
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `Server responded with status: ${response.status}`);
  }
  return response.json();
}