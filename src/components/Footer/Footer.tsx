import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react"

export const Footer = () => {
    return(
        <div className="footerContainer">
            <Box position='relative' padding='10'>
                <Divider />
                <AbsoluteCenter bg='white' px='10'>
                    Content
                </AbsoluteCenter>
            </Box>
        </div>
    )
}