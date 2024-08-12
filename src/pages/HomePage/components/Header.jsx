import React from 'react'
import vector from '../../../assets/Vector.svg'
// import { ReactComponent as MyIcon } from '../../../assets/Icon.svg'
import { MdArrowOutward } from "react-icons/md";

import { Box, Button, Flex, HStack, Icon,  Text, VStack } from '@chakra-ui/react'

const Header = () => {
    return (

        <Flex  direction={{lg:"row",md:"row",sm:"column"}} justifyContent={{lg:"space-between",md:"space-between",sm:"center"}} alignItems={"center"} alignSelf={"stretch"} p={{ lg: "80px 162px", md: " 60px 80px" , sm:"40px 16px"}}
           gap={{sm:"10px"}} sx={{ borderTop: '1px solid var(--Dark-12, #1C1C21)', borderBottom: '1px solid var(--Dark-12, #1C1C21)' }}
            bgImage={{ md: `url(${vector})`, sm: "none" }} bgRepeat="no-repeat" bgPosition={"center"} bgSize={{ lg: "346px 346px", md: "262px 262px" }} >
           
            <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ lg: "10px", md: "4px",sm:"4px"  }}>
                <Text textStyle={"h6"}>Stunning Photography by</Text>
                <Text textStyle={"h1"} >Damien Braun</Text>
            </VStack>

            {/* <Box  >
                <Image width={{lg:"346px",md:"262px"}} height={{lg:"346px",md:"262px"}} src={vector} alt='Dan Abramov' />
            </Box> */}
           
                <Flex flexDirection={"column"} alignItems={"flex-start"} gap={{ lg: "10px", md: "4px",sm:"4px" }}>
                    <HStack spacing='10px'>
                        <Text textStyle={"h2"}>Let’s</Text>
                        <Button bg="purple.55" py={"18px"} px={"50px"} borderRadius={"100px"}>  <Icon as={MdArrowOutward} w={"30px"} h={"30px"} /></Button>
                    </HStack>
                    <Text textStyle={"h2"}>Work Together</Text>
                </Flex>
            

        </Flex>

    )
}

export default Header