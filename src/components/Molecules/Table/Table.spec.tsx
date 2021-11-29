import { render, waitFor } from '@testing-library/react';
import { Table } from '..';

const tableDataMock = [
  {
    name: 'test',
    phone: 'test',
    email: 'test',
    cpf: 'test',
  },
];

const tableColumnsMock = [
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
];
describe('Table', () => {
  it('Should render table component', () => {
    const component = render(<Table columns={tableColumnsMock} data={tableDataMock} />);
    expect(component).toBeTruthy();
  });

  it('Should render with 1 item', () => {
    const component = render(<Table columns={tableColumnsMock} data={[tableDataMock[0]]} />);
    expect(component).toBeTruthy();
  });
});
