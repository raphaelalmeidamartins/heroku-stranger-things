import React from 'react';
import './App.css';

import Footer from './components/Footer';
import StrangerThings from './components/StrangerThings';

const enviroment = process.env.NODE_ENV === 'development';

function App() {
  return (
    <div className="App">
      <StrangerThings />
      {enviroment && <Footer />}
    </div>
  );
}

export default App;
