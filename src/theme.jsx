import { background, border, extendTheme } from '@chakra-ui/react'

// example theme
const theme = extendTheme({
    colors:{
        grey:{
            40:"#62646C",
            50:"#797C86",
            70:"#AFB0B6",
            80:"#CACACE",
            90:"#E4E4E6",
            95:"#F2F2F3",
            57:"#F7F7F8",
            99:"#FCFCFD",
        },
        purple:{
            55:"#4A2CED",
            60:"#5E43EF",
            70:"#8672F3",
            80:"#AEA1F7",
            90:"#D6D0FB",
            95:"#EAE7FD",
            97:"#F3F1FE",
            99:"#FBFAFF",
        }
    },
    components: {
        Button: {
            baseStyle: {
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "150%",
                border: "1px solid var(--Dark-12, #1C1C21)",
            },
            variants: {
                solid: {
                    bg: '#000', // Default background color
                    color: '#fff',
                    p:{lg:'30px 40px', md:'24px 30px'},
                     borderRadius:"0",
                    _hover: {
                        bg: '#AFB0B6', // Background color on hover
                    },
                },               
                 selected: {
                    bg: '#62646C', // Default background color
                    color: '#fff',
                    p:{lg:'30px 40px', md:'24px 30px'},
                     borderRadius:"0",
                    _hover: {
                        bg: '#AFB0B6', // Background color on hover
                    },
                },
                buttons:{
                    bg: "#62646C",
                    borderRadius:"10px",
                    p:{lg:'16px 24px', md:'14px 20px'},
                    _hover: {
                        bg: '#AFB0B6', // Background color on hover
                    },
                    _active: {
                        bg: '#62646C', // Background color when active
                    },  
                }
            },
        },
    },
    styles: {
        global: {
            'body': {
                backgroundColor: '#000',
                color: '#fff',
                fontFamily: '"Manrope", sans-serif',
            }
        }
    },
    textStyles: {
        h6:{
            color:"grey.40",
            fontSize:{md:"18px",lg:"22px",sm:"14px"},
             textTransform:"uppercase",
              fontWeight:500 ,
              lineHeight:'normal'
        },
        h1:{
            color:"grey.90",
            fontSize:{md:"60px",lg:"80px",sm:"40px"},  
             textTransform:"uppercase",
              fontWeight:600 ,
              lineHeight:'normal',         
        },
        h2:{
            color:"grey.90",
            fontSize:{md:"48px",lg:"58px",sm:"28px"},  
             textTransform:"uppercase",
              fontWeight:600 ,
              lineHeight:'normal',         
        }
    },
    fonts: {
        body: "system-ui, sans-serif",
        heading: "Georgia, serif",
        mono: "Menlo, monospace",
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    lineHeights: {
        normal: "normal",
        none: 1,
        shorter: 1.25,
        short: 1.375,
        base: 1.5,
        tall: 1.625,
        taller: "2",
        "3": ".75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "8": "2rem",
        "9": "2.25rem",
        "10": "2.5rem",
    },
    letterSpacings: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
    },
    breakpoints:{
        // sm: '25em', // 400px
        // md: '48em', // 768px
        // lg: '62em', // 992px
        // xl: '80em', // 1280px
        // '2xl': '90em', // 1440px
        // // Add your custom breakpoints here
        // '3xl': '120em', // 1920px
        sm:"390px",
        md:"1440px",
        lg:"1920px" 
    }
});

export default theme;