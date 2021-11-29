/* eslint-disable react/jsx-key */
import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import { ITable } from './interfaces';

import * as S from './styles';

const Table = ({ columns, data }: ITable) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  return (
    <S.Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <S.Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <S.Th {...column.getHeaderProps()}>{column.render('Header')}</S.Th>
            ))}
          </S.Tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <S.Tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <S.Td {...cell.getCellProps()}>{cell.render('Cell')}</S.Td>;
              })}
            </S.Tr>
          );
        })}
      </tbody>
    </S.Table>
  );
};

export default Table;
