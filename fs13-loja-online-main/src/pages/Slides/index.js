import React from 'react';

export default function Slides() {
    const [atual, setAtual] = React.useState(0);

    const frases = [
        'Frase 0',
        'Frase 1',
        'Frase 2',
        'Frase 3',
        'Frase 4',
        'Frase 5',
        'Frase 6',
    ];

    const add = () => {
        if (atual === frases.length - 1) {
            setAtual(0);
            return;
        }

        setAtual(atual + 1);
    }

    const remove = () => {
        if (atual === 0) {
            setAtual(frases.length - 1);
            return;
        }

        setAtual(atual - 1);
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            clearInterval();
            setAtual(atual + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, [atual]);

    return (
        <div>
            {frases[atual]}
            <br/>

            <button onClick={remove}>Voltar</button>
            <button onClick={add}>Avançar</button>
        </div>
    )
}