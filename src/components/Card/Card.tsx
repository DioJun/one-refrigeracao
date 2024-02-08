import './Card.css'

export const Card = () => {
    return(
        <div className="conatiner-card">

            <div className='slider'>

                <h1> A One Refrigeração tem a Solução que você precisa</h1>
                <h2>Conheça nossos serviços e benefícios: </h2>

                <div className='services'>

                    <span className='card card1'>
                        <div>
                            <img src='./cardImg/1.jpg' alt='01' />
                            <p>Instalação e Soluções</p>
                        </div>
                    </span>

                    <span className='card card2'>
                        <div>
                            <img src="/images/icon-box-lightning.svg" alt="" />
                            <p>Conserto e Manutenção</p>
                        </div>
                    </span>

                    <span className='card card3'>
                        <div>
                            <img src="/images/icon-box-lightning.svg" alt="" />
                            <p>Qualidade e Confiança</p>
                        </div>
                    </span>
                
                </div>

            </div>

        </div>
    )
}