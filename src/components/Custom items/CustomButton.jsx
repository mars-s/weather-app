import React from 'react'
import { IconButton, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'

const CustomButton = (icon, color, link) => {

    return (
        <>
            <Box p={1} bgcolor={color}>
                <IconButton color="primary" aria-label="github" component={Link} to={link}>
                    {icon}
                </IconButton>
            </Box>
        </>
    )
}

export default CustomButton
