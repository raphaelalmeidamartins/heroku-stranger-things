import React from 'react';
import './App.css';

import Footer from './components/Footer';
import StrangerThings from './components/StrangerThings';

function App() {
  const enviroment = process.env.MODE === 'development';

  return (
    <div className="App">
      <StrangerThings />
      {enviroment && <Footer />}
    </div>
  );
}

export default App;
