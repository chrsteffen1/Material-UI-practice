import './App.css';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState({
    firstName: 'random',
    lastName: 'name',
    email: 'randomname@generalassemb.ly',
    location: 'Seattle',
  })

  return (
    <div className="App">
    </div>
  );
}

export default App;
