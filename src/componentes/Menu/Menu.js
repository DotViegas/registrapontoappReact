import BotaoMenu from '../BotaoMenu'
import './Menu.css'

export const Menu = () => {
    return (
        <menu>
            <ul className='menu__sessao'>
                <BotaoMenu classe='menu__sessao__item foto' imagem='' nome='Imagem do Usuário' />
                <BotaoMenu classe='menu__sessao__item' imagem='' nome='Notificação' />
                <BotaoMenu classe='menu__sessao__item' imagem='' nome='Guia de Uso' />
            </ul>
        </menu>
    )
}