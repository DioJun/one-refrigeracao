import './Card.css'

export const Card = () => {
    return(
        <div className="conatainer-card">

            <div className='slider'>

                <h1> A One Refrigeração tem a Solução que você precisa</h1>
                <h2>Conheça nossos serviços e benefícios: </h2>

                <div className='services'>

                    <div className='card card1'>
                        <div>
                            <img src="../cardImg/1.png" alt="" />
                            <p>Instalação e Soluções</p>
                        </div>
                    </div>

                    <div className='card card2'>
                        <div>
                            <img src="/images/icon-box-lightning.svg" alt="" />
                            <p>Conserto e Manutenção</p>
                        </div>
                    </div>

                    <div className='card card3'>
                        <div>
                            <img src="/images/icon-box-lightning.svg" alt="" />
                            <p>Qualidade e Confiança</p>
                        </div>
                    </div>
                
                </div>

            </div>

            <div className='apresentation'>
                <h1>SERVIÇO COMPLETO PARA SEU</h1>
                <h2>SISTEMA DE REFRIGERAÇÃO</h2>
                <button type='button'>Whatsapp</button>
            </div>

        </div>
    )
}