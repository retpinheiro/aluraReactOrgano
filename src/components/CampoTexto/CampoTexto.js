import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => {

    const placeholderModificada = `Digite seu ${props.placeholder}...`

    // let valor;

    const [valor, setValor] = useState('')

    const valorDigitado = (evento)  => {
        props.valorAlterado(evento.target.value)
        console.log(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={valorDigitado}  required={props.obrigatorio} type="text" name="nome" placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;