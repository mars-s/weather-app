import React from 'react'
import { Pane, Button, Heading } from 'evergreen-ui'
const Header = () => {
    return (
        <>
            <Pane display="flex" alignItems="center">
                <Heading>Jhugnu Weather</Heading>
                <Button>Home</Button>
                <Button>Weather</Button>
            </Pane>
        </>
    )
}

export default Header
