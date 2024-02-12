import { Card } from '../Card/Card';
import { Footer } from '../Footer/Footer';
import WhatsAppButton from '../Footer/WhatsAppButton';
import { Header } from '../Header/Header';
import './Layout.css'

export const Layout = () => {
    return(
        <main className='main'>
            <WhatsAppButton numero={'47991986405'}/>
            <Header />
            <Card />
            <Footer />
        </main>
    )
}