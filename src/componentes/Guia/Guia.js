import { BotoesGuia } from '../BotoesGuia/BotoesGuia'
import SpanGuia from '../SpanGuia'
import './Guia.css'

export const Guia = () => {
    return(
        <ul className="listagem">
            <BotoesGuia classe='corpo__listagem aberta' id='dashboard' source='/img/icon-dashboard.png' nome='Dashboard' />
            <SpanGuia />
            <BotoesGuia classe='corpo__listagem' id='cadastroDeEmpresa' source='/img/icon-empresa.png' nome='Cadastro de empresa' />
            <BotoesGuia classe='corpo__listagem' id='cadastroDeCargo' source='/img/icon-cargo.png' nome='Cadastro de cargo' />
            <BotoesGuia classe='corpo__listagem' id='cadastroDeColaborador' source='/img/icon-colaborador.png' nome='Cadastro de colaborador' />
            <BotoesGuia classe='corpo__listagem' id='jornadaDeTrabalho' source='/img/icon-jornada.png' nome='Jornada de trabalho' />
            <SpanGuia />
            <BotoesGuia classe='corpo__listagem' id='verificarRegistroDePonto' source='/img/icon-ponto.png' nome='Verificar registro de ponto' />
            <BotoesGuia classe='corpo__listagem' id='relatorioDePonto' source='/img/icon-ponto-settings.png' nome='Relatório de ponto' />
            <SpanGuia />
            <BotoesGuia classe='corpo__listagem' id='calculoFolhaDePagamento' source='/img/icon-calculo.png' nome='Cálculo folha de pagamento' />
            <BotoesGuia classe='corpo__listagem' id='folhaDePagamento' source='/img/icon-folha-pagamento.png' nome='Folha de pagamento' />
            <SpanGuia />
            <BotoesGuia classe='corpo__listagem' id='ferias' source='/img/icon-ferias.png' nome='Férias' />
        </ul>
    )
}