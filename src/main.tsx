import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CharacterCounter minWords={25} maxWords={300} targetReadingTime={5} />
  </StrictMode>
);
