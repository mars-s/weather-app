import { Typography,  } from '@material-ui/core';
import React from 'react'
import WeatherSvg from './imgs/WeatherSvg'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: './imgs/pexels-josh-hild-2448749.jpg'
    }
}))


const Home = () => {
    return (
        <div className={classes.root}>
        <CssBaseline />
        <WeatherSvg />
        <Typography varient='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam modi minus recusandae voluptatibus nihil illo natus quod voluptas nam maxime provident libero perspiciatis assumenda, ducimus earum quisquam voluptates? Optio, quia.</Typography>
        </div>
    )
}

export default Home
