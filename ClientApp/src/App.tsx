import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { Home } from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import NavMenu from './components/NavMenu';

import './custom.css'
import { Game } from './components/map/map';
import Login from './components/Login';
import Register from './components/Register';


const App = () => {
  const [name, setName] = useState('');

  return (
    <Layout >
      <NavMenu name={name} setName={setName} />
      <Route exact path='/' component={() => <Home/>} />
      <Route path='/counter' component={Counter} />
      <Route path='/fetch-data' component={FetchData} />
      <Route path='/game' component={Game} />
      <Route path='/login' component={() => <Login setName={setName} />} />
      <Route path='/register' component={Register} />
    </Layout>
  );
}

export default App;