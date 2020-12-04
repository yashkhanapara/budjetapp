import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Mycontextprovider from './context/Mycontextprovider';
import {mycontext} from './context/Mycontextprovider';

import Budjet from './components/Budjet';

function App() {
  return (
    <Mycontextprovider>
      <Budjet />
    </Mycontextprovider>
  );
}

export default App;
