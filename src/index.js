import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

export const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:8081/api/v1";
console.log("Base URL - " + baseUrl);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);