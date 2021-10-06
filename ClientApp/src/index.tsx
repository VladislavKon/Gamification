import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store'
import { OidcProvider } from 'redux-oidc';
import userManager from './components/auth/userManager';
// import registerServiceWorker from './registerServiceWorker';

const baseUrl: string = document.getElementsByTagName('base')[0].getAttribute('href') || '';
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
    </OidcProvider>
  </Provider>,
  rootElement);

// Uncomment the line above that imports the registerServiceWorker function
// and the line below to register the generated service worker.
// By default create-react-app includes a service worker to improve the
// performance of the application by caching static assets. This service
// worker can interfere with the Identity UI, so it is
// disabled by default when Identity is being used.
//
//registerServiceWorker();

