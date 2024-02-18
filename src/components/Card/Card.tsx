import './Card.css';
import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { scroller } from 'react-scroll';
import './animations.css';

export const Card = () => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null); // Definindo o tipo de ref como HTMLDivElement

    useEffect(() => {
        const handleScroll = () => {
            const element = containerRef.current;

            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top >= 0 && rect.bottom <= windowHeight) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            scroller.scrollTo('container-card', {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: -150 // Ajuste conforme necessário para o posicionamento desejado
            });
        }
    }, [isVisible]);

    return (
        <ChakraProvider>
            <div ref={containerRef} className={`container-card ${isVisible ? 'visible' : ''}`}>
                <div className='slider'>

                    <h1 > A One Refrigeração tem a Solução que você precisa</h1>
                    <h2 >Conheça nossos serviços e benefícios: </h2>

                    <div className='services'>
                        <div className={`card card1 ${isVisible ? 'fade-in visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
                            <p>Instalação e Soluções</p>
                        </div>
                        <div className={`card card2 ${isVisible ? 'fade-in visible' : ''}`} style={{ transitionDelay: '0.8s' }}>
                            <p>Conserto e Manutenção</p>
                        </div>
                        <div className={`card card3 ${isVisible ? 'fade-in visible' : ''}`} style={{ transitionDelay: '1s' }}>
                            <p>Qualidade e Confiança</p>
                        </div>
                    </div>

                </div>

                <div className={`apresentation ${isVisible ? 'fade-in visible' : ''}`} style={{ transitionDelay: '1.2s' }}>
                    <h1>SERVIÇO COMPLETO PARA SEU</h1>
                    <h2>SISTEMA DE REFRIGERAÇÃO</h2>
                </div>
            </div>
        </ChakraProvider>
    );
};
