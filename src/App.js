import './App.css';
import { useState } from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

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

  return (
    <div className="App">
      <Box className='box'>
        <Paper>
        <form>
      <TextField
          type="text"
          name="firstName"
          label="First Name"
          value={formData.firstName}
          // add below: 
          onChange={handleChange}
      />
      <TextField
          type="text"
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          // add below:
          onChange={handleChange}
      />
      <TextField
          type="text"
          name="email"
          label="Email"
          value={formData.email}
          // add below:
          onChange={handleChange}
      />
      <TextField
          type="text"
          name="location"
          label="Location"
          value={formData.location}
          // add below:
          onChange={handleChange}
      />
      <Button type="submit"> Submit </Button>
    </form>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
