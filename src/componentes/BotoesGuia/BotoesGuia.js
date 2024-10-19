import './BotoesGuia.css'

export const BotoesGuia = (props) => {
    return (
        <li className={props.classe} id={props.id}>
            <img className="img__listagem" src={props.source} alt={props.id} srcset="" />
            <span className="listagem__item">{props.nome}</span>
        </li>
    )
}