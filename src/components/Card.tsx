import { Box, Center, Image } from '@chakra-ui/react';
import { Header } from './Header';

export const Card = () => {
    return(
        <Box backgroundColor='#79D6FE' minHeight='100vh'>
            <Box padding='30px'>
                <Header />
            </Box>
        </Box>
    )
}