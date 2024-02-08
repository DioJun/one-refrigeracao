import { Box, Center, Image, Heading } from '@chakra-ui/react';
import logo from '../img/onelogo.png'

export const Header = () => {
    return(
        
        <Box>
            <Center>
                <Box w='54vh'>
                    <Image src={logo} alt='logo' />
                </Box>
            </Center>

            <Center>
                <Heading as='h5' size='sm'>
                    Assistência Técnica em Refrigeração e Climatização
                </Heading>
            </Center>

        </ Box>
    )
}