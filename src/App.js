import './App.css';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState({
    firstName: 'random',
    lastName: 'name',
    email: 'randomname@generalassemb.ly',
    location: 'Seattle',
  })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: ''
  })

  return (
    <div className="App">
    </div>
  );
}

export default App;
