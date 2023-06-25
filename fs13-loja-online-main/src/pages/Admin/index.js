import React from 'react';
import {Divider} from "@mui/material";

export default function Admin() {
    const [campaigns, setCampaigns] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/campaigns')
            .then(res => res.json())
            .then(data => setCampaigns(data));
    }, []);

    const remove = (id) => {
        if (false === window.confirm('Tem certeza?')) {
            return;
        }

        fetch(`http://localhost:8000/campaigns/${id}`, {
            method: 'DELETE'
        });

        setCampaigns(
            campaigns.filter(cada => cada.id !== id)
        );
    }; 

    return (
        <div>
            <h1>Admin</h1>
            <Divider/>

            <table width="100%">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Imagem</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map(cada => {
                        return (
                            <tr>
                                <td>{cada.id}</td>
                                <td>{cada.title}</td>
                                <td>{cada.text}</td>
                                <td> <img width="100px" src={cada.image}/> </td>
                                <td>
                                    <button>Editar</button>
                                    <button onClick={() => remove(cada.id)}>Excluir</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}