import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "../src/components/App/App"
import { BrowserRouter } from "react-router-dom"
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Poppins", "Roboto:700,400", "Inter:400"],
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>
);