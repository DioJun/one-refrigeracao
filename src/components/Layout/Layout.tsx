import { Card } from '../Card/Card';
import { Header } from '../Header/Header';
import './Layout.css'

export const Layout = () => {
    return(
        <main className='main'>
            <Header />
            <Card />
        </main>
    )
}