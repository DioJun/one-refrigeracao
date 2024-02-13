import { AbsoluteCenter, Box, Center, Divider } from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import './Footer.css'

export const Footer = () => {
    return(
        <div className="footerContainer">
            <Center>
                <Box width='700px' height='300px' position='relative' padding='10'>
                    
                    <AbsoluteCenter display={'flex'}>
                        <FaFacebook className="faceIcon" />
                        <RiInstagramFill className="instaIcon" /> 
                    </AbsoluteCenter>
                </Box>
            </Center>
        </div>
    )
}