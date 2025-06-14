import { useState } from 'react';

function Home() {
    return <Contador></Contador>;
}

function Contador() {
    const [contador,setContador] = useState(0);

    function adicionarContador() {
        console.log("Apertou!");
        setContador(contador+1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    );
}

export default Home;