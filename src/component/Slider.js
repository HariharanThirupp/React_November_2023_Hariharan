import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Explore" />
        
        <Link to="/bo">
        < Tab label="Bookings" />
        </Link>
          
        <Link to="/ex">
          <Tab label="Global Events" />
        </Link>
        <Link to="/vi">
          <Tab label="Past Travels" />
        </Link>

      </Tabs>
    </Box>
    <hr></hr></div>
  );
}