import React, { useMemo, useState } from 'react';
import { Atoms, Molecules } from '../../components';
import { IData } from './interfaces';

import * as S from './styles';

const List = () => {
  const [data, setData] = useState<IData[]>([
    {
      name: 'Arthur',
      email: 'geisweiller@gmail.com',
      cpf: '05282890550',
      phone: '1198989898',
    },
    {
      name: 'Arthur',
      email: 'geisweiller@gmail.com',
      cpf: '05282890550',
      phone: '1198989898',
    },
    {
      name: 'Arthur',
      email: 'geisweiller@gmail.com',
      cpf: '05282890550',
      phone: '1198989898',
    },
  ]);

  const columns = useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'name',
      },
      {
        Header: 'E-mail',
        accessor: 'email',
      },
      {
        Header: 'CPF',
        accessor: 'cpf',
      },
      {
        Header: 'Telefone',
        accessor: 'phone',
      },
    ],
    []
  );

  return (
    <S.Container>
      <Molecules.Table columns={columns} data={data} />
      <Molecules.Button text="Voltar" />
    </S.Container>
  );
};

export default List;
