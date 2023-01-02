import './App.css';
import { useState, useEffect } from 'react';
import Form from './Components/Form';
import Display from './Components/Display';

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

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setDisplay(formData)
  }

  useEffect(() => {
    console.log(display, 'use effect')
  }, [display])

  return (
    <div className="App">
      <Display display={display}/>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
    </div>
  );
}

export default App;
