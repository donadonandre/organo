import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const [valor, setValor] = useState('')

    const aoDigitar = (event) => {
        setValor(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto