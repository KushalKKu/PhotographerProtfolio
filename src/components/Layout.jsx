import { Box, Center, Container, Flex, VStack } from '@chakra-ui/react'
import React, { Children } from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
    return (
        <Flex flexDirection={"column"} gap={0} >
            <NavBar />
            <Box as='main'>
              {children}  
            </Box>
        </Flex>
    )
}

export default Layout