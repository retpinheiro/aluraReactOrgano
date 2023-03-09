import Botao from '../Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react';


const Formulario = () => {
    const times = [
        'Programação',
        'Front-end',
        'Back-end',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');

    const enviar = (evento) =>{
        evento.preventDefault();
        console.log('Enviando...', nome, cargo, imagem);
    }

    return (
        <section className='formulario'>
            <form onSubmit={enviar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                obrigatorio={true}
                label="Nome" placeholder="nome"
                valor={nome}
                valorAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                label="Cargo"
                placeholder="cargo"
                valorAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                label="Imagem"
                placeholder="http"
                valor={imagem}
                valorAlterado={valor => setNome(valor)}
                />
                <ListaSuspensa itens={times} label="Times" />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;
