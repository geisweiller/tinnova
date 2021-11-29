/* eslint-disable react/display-name */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IActions } from '../../assets';
import { useHistory } from 'react-router-dom';
import { Molecules } from '../../components';
import { IData } from './interfaces';

import * as S from './styles';
import { useData } from '../../contexts/DataContext/DataContext';

const List = () => {
  const history = useHistory();
  const { data, setData } = useData();

  const handleDelete = useCallback(
    (cpf) => {
      const newData = data.filter((item) => item.cpf !== cpf);
      setData(newData);
      localStorage.setItem('data', JSON.stringify(newData));
    },
    [data]
  );

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
      {
        Header: 'Excluir',
        accessor: 'delete',
        className: 'delete',
        Cell: ({ row: { original } }: any) => {
          return (
            <img
              src={IActions.DeleteIcon}
              onClick={() => handleDelete(original.cpf)}
              data-testid="delete"
            />
          );
        },
      },
    ],
    [handleDelete]
  );

  return (
    <S.Container data-testId="list">
      <Molecules.Table columns={columns} data={data} />
      <Molecules.Button text="Voltar" handleClick={() => history.push('/')} />
    </S.Container>
  );
};

export default List;
