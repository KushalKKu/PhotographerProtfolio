import { Box, Button, Container, Flex, HStack, Icon, Image, Text, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo.svg'
import { useLocation, Link } from 'react-router-dom'
import burger from "../assets/smBurgerMenu.svg"

const NavBar = () => {

    const location = useLocation();

    const isActiveLink = (link) => {
        return location.pathname === link;
    };

    const details = [
        { path: "/home", name: "Home", radius: "12px 0 0 0" },
        { path: "/about", name: "About Me", radius: "0 0 0 0" },
        { path: "/portfolio", name: "Portfolio", radius: "0 0 0 0" },
        { path: "/service", name: "Services", radius: "0 12px  0 0" },
    ]

    return (   
        <Box  px={{lg:"125px",md:"62px",sm:"16px"}}>
       <Flex p={{lg:"30px 40px 0 ",md:"30px 20px 0 ", sm:"40px 0px 0px 16px"}} alignSelf={"stretch"} justifyContent={"space-between"} 
       alignItems={{lg:"center",md:"center",sm:"flex-start"}} width={"100%"} sx={{borderRight: "1px solid var(--Dark-12, #1C1C21)",
borderLeft: '1px solid var(--Dark-12, #1C1C21)'}} >
            <Box  >
                <Image w={{lg:"134px",md:"110px",sm:"90px"}} h={{lg:"27px",md:" 22px",sm:" 18px"}} src={Logo} alt='Dan Abramov' />
            </Box>
            {/* boxSize={{lg:"134px 27px",md:"110px 22px",sm:"90px 18px"}}  */}

            <HStack gap={0}  display={{ sm: 'none', md: 'flex' ,lg:'flex'}}>
                {details.map((text, index) => (
                    <Link to={text.path} key={text.name}>
                        <Button  borderRadius={text.radius}
                            key={index} display={"flex"} 
                            onClick={() => { handleClick(index) }}
                            variant={isActiveLink(text.path) ? 'selected' : 'solid'}                
        
                        >
                          <Text fontSize={{lg:"18px",md:"14px"}}> {text.name} </Text>  
                        </Button>
                    </Link>
                ))}
            </HStack>


       <Image display={{lg:'none',md:"none",sm:"block"}} src={burger }></Image>     

<Box  display={{sm:'none', md: 'flex'}} pb={{lg:"30px", md:"20px"}}>
<Button  variant="buttons" onClick={() => { navigate("/contact") }}> <Text fontSize={{lg:"18px",md:"14px"}}>Contact Me</Text>  </Button>

</Box>
        </Flex>
        </Box> 
       
   
    
    )
}

export default NavBar


