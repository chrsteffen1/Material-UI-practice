import './App.css';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import PersonIcon from '@mui/icons-material/Person'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import ListItemIcon from '@mui/material/ListItemIcon'
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
      <Box 
      display="flex"
      justifyContent='center'
      alignItems='center'
      sx={{width:'50%', mt: '2rem'}}>
        <Paper elevation={4} sx={{ width: "100%", p: "1rem" }}>
          <form onSubmit={handleSubmit}>
            <TextField
                type="text"
                name="firstName"
                label="First Name"
                value={formData.firstName} 
                onChange={handleChange}
                autoComplete="off"
                margin="normal"
                fullWidth
                required
            />
            <TextField
                type="text"
                name="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="off"
                margin="normal"
                fullWidth
                required
            />
            <TextField
                type="text"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                margin="normal"
                fullWidth
                required
                
            />
            <TextField
                type="text"
                name="location"
                label="Location"
                value={formData.location}
                onChange={handleChange}
                autoComplete="off"
                margin="normal"
                fullWidth
                required
                
            />
            <Button type="submit" variant='contained' fullWidth color='secondary'> Submit </Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
