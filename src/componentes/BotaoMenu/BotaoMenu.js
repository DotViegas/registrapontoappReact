import './BotaoMenu.css'

export const BotaoMenu = (props) => {
    return(
        <li className={props.classe}>
                    <img src={props.imagem} alt={props.nome} />
        </li>
    )
}