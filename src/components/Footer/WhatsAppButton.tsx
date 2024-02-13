import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import './WhatsAppButton.css'


const WhatsAppButton: React.FC<{ numero: string }> = ({ numero }) => {
  const handleWhatsAppClick = () => {
    const mensagem = encodeURIComponent('Gostaria de fazer um orçamento!');
    window.open(`https://wa.me/55${numero}?text=${mensagem}`, '_blank');
  };

  return (
    <a
      href={`https://wa.me/55${numero}?text=${encodeURIComponent('Adorei seu artigo')}`}
      style={{
        position: 'fixed',
        width: '60px',
        height: '60px',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#25d366',
        color: '#FFF',
        borderRadius: '50px',
        textAlign: 'center',
        fontSize: '30px',
        boxShadow: '1px 1px 2px #888',
        zIndex: 1000
      }}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
    >
      <i style={{ marginTop: '16px' }} className="fa fa-whatsapp"></i>
      <FaWhatsapp className='icon'/>

    </a>
  );
};

export default WhatsAppButton;
