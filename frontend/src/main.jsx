import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <div style={{ border: '2px solid black' }}>   */}
      <App />
     {/* </div>  */}
 </StrictMode>,
);
