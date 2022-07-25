import React from 'react';
import './App.css';

import Footer from './components/Footer';
import StrangerThings from './components/StrangerThings';

const enviroment = process.env.REACT_APP_ENVIRONMENT === 'development';

function App() {
  console.log(process.env);

  return (
    <div className="App">
      <StrangerThings />
      {enviroment && <Footer />}
    </div>
  );
}

export default App;
