import Botao from "../Botao"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX e Design'
    ]

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log('Formulário enviado')
    }
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario