import React from 'react'
import Layout from '../../components/Layout'
import Header from './components/Header'
import SlidingTags from './components/SlidingTags/SlidingTags'
import { Image, useBreakpointValue } from '@chakra-ui/react'
import ContainerImagelg from '../../assets/Images Container lg.svg'
import ContainerImagemd from '../../assets/Images Container md.svg'
import ContainerImagesm from '../../assets/Images Container sm.svg'


const HomePage = () => {
  const containerImage = useBreakpointValue({
    sm: ContainerImagesm, // Default for small screens
    md: ContainerImagemd,   // Medium screens
    lg: ContainerImagelg,    // Large screens
  });


  return (
    <Layout >
    <Header/>   
    <SlidingTags  direction="left" speed="fast"/>
    <Image display={{lg:'block',md:"none",sm:"none"}} boxSize={"1596px 512px"} px={"162px"} src={ContainerImagelg} alt='Dan Abramov' />
    <Image display={{lg:'none',md:"block",sm:"none"}} boxSize={"1280px 424px"} px={"80px"} src={ContainerImagemd} alt='Dan Abramov' />
    <Image display={{lg:'none',md:"none",sm:"block"}} boxSize={"358px 223px"} px={"16px"} src={ContainerImagesm} alt='Dan Abramov' />

 </Layout>
  )
}

export default HomePage