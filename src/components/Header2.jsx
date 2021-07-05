import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, IconButton } from '@material-ui/core'
import { AiFillGithub } from 'react-icons/ai'
import { TiWeatherNight } from 'react-icons/ti'
import { FaHome } from 'react-icons/fa'
import { indigo,  green, blue } from '@material-ui/core/colors'
import { Link } from 'react-router-dom'


export default function FlexGrow() {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="background.paper">
        <Box p={1} flexGrow={1} bgcolor='inherit'>
          <Typography variant='h4'>StarField Weather</Typography>
        </Box>
        <Box p={1} bgcolor={blue[100]}>
        <IconButton color="primary" aria-label="Home" component={Link} to='/'>
            <FaHome />
        </IconButton>
        </Box>
        <Box p={1} bgcolor={indigo[100]}>
        <IconButton color="primary" aria-label="App" component={Link} to='/App'>
            <TiWeatherNight />
        </IconButton>
        </Box>
        <Box p={1} bgcolor={green[100]}>
        <IconButton color="primary" aria-label="github" >
            <AiFillGithub />
        </IconButton>
        </Box>
      </Box>
    </div>
  );
}