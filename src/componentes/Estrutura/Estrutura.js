import Corpo from '../Corpo'
import Menu from '../Menu'
import './Estrutura.css'

export const Estrutura = () => {
    return(
        <section className="section__corpo">
            <Menu />
            <Corpo />
        </section>
    )
}