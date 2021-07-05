import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { Pane, Button, Heading, MoonIcon, HomeIcon } from 'evergreen-ui'

const Header = () => {
    return (
        <>
            <Pane display="flex" alignItems="center" marginY={24}>
                <Heading flex={1}>StarFall Weather</Heading>
                <Button appearance="minimal" iconAfter={HomeIcon}>Home</Button>
                <Button iconAfter={MoonIcon}>Weather</Button>
                <Button iconAfter={<AiFillGithub />} appearance="github">Our Github</Button>
            </Pane>
        </>
    )
}

export default Header
