import './Card.css'
import { ChakraProvider, Button } from '@chakra-ui/react'
import { FaWhatsapp } from "react-icons/fa6";

export const Card = () => {
    return(
        <ChakraProvider>
            <div className="conatainer-card">

                <div className='slider'>

                    <h1> A One Refrigeração tem a Solução que você precisa</h1>
                    <h2>Conheça nossos serviços e benefícios: </h2>

                    <div className='services'>

                        <div className='card card1'>
                            <p>Instalação e Soluções</p>
                        </div>

                        <div className='card card2'>
                            <p>Conserto e Manutenção</p>
                        </div>

                        <div className='card card3'>
                            <p>Qualidade e Confiança</p>
                        </div>
                    
                    </div>

                </div>

                <div className='apresentation'>
                    <h1>SERVIÇO COMPLETO PARA SEU</h1>
                    <h2>SISTEMA DE REFRIGERAÇÃO</h2>
                </div>

            </div>
        </ChakraProvider>
    )
}