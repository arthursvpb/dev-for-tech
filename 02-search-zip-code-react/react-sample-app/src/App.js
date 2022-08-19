import React, { useState } from 'react';
import { api } from './api/api';

export const Home = () => {
  const [cep, setCep] = useState('');
  const [cepData, setCepData] = useState({});

  async function getCepInfo() {
    const response = await api.get(`/ws/${cep}/json/`);

    setCepData(response.data);
  }

  return (
    <>
      <input type="text" onChange={e => setCep(e.target.value)} />
      <button onClick={getCepInfo}>Buscar</button>

      {cepData && (
        <table>
          <thead>
            <tr>
              <th>CEP</th>
              <th>Endereço</th>
              <th>Bairro</th>
              <th>Cidade/Estado</th>
            </tr>
            <tr>
              <td>{cepData.cep}</td>
              <td>{cepData.logradouro}</td>
              <td>{cepData.bairro}</td>
              <td>
                {cepData.localidade}/{cepData.uf}
              </td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      )}
    </>
  );
};
