import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App/App';
import { MangaListProvider } from './Contexts/MangaListContext';
import { MangaProvider } from './Contexts/MangaContext';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <MangaListProvider>
      <MangaProvider>
        <App />
      </MangaProvider>
    </MangaListProvider>
  </BrowserRouter>
  , document.getElementById('root'));

serviceWorker.unregister();
