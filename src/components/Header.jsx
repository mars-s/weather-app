import React from 'react'
import { Pane, Button, Heading, MoonIcon, HomeIcon } from 'evergreen-ui'
const Header = () => {
    return (
        <>
            <Pane display="flex" alignItems="center" marginY={24}>
                <Heading flex={1}>Jhugnu Weather</Heading>
                <Button appearance="minimal" iconAfter={HomeIcon}>Home</Button>
                <Button iconAfter={MoonIcon}>Weather</Button>
            </Pane>
        </>
    )
}

export default Header
