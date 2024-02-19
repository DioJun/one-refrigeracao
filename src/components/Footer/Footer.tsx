// import { AbsoluteCenter, Box, Center} from "@chakra-ui/react";
// import { FaFacebook} from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";
import './Footer.css'

export const Footer = () => {
    return(
        <div className="footerContainer">
            {/* <Center>
                <Box width='700px' height='300px' position='relative' padding='10'>
                    
                    <AbsoluteCenter display={'flex'}>
                        <FaFacebook className="faceIcon" />
                        <RiInstagramFill className="instaIcon" /> 
                    </AbsoluteCenter>

                </Box>
            </Center> */}

            <a className="developed" href="https://www.workana.com/freelancer/1c944ab88433a73d9ef59a489eb16ffc" target="blank">Desenvolvido por C.A.Y.F</a>


        </div>
    )
}