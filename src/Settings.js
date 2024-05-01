import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const Settings = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
    // Add logic to actually switch themes (if required)
  };

  return (
    <Box>
      <Typography variant="h6">Settings</Typography>
      <Box display="flex" alignItems="center" marginTop={2}>
        <Typography>Dark Theme</Typography>
        <Switch checked={darkTheme} onChange={handleThemeChange} />
      </Box>
    </Box>
  );
};

export default Settings;
