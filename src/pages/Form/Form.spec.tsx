import { render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { Form } from '.';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Form Page', () => {
  it('should be able to send form', async () => {
    const { getByTestId, getByText } = render(<Form />);

    const nameField = getByTestId('name');
    const cpfField = getByTestId('cpf');
    const emailField = getByTestId('email');
    const phoneField = getByTestId('phone');
    const buttonElement = getByText('Cadastrar');
    await waitFor(() => {
      fireEvent.change(nameField, { target: { value: 'John Doe' } });
      fireEvent.change(emailField, { target: { value: 'johndoe@email.com' } });
      fireEvent.change(cpfField, { target: { value: '12345678901' } });
      fireEvent.change(phoneField, { target: { value: '11999029292' } });
      fireEvent.click(buttonElement);
    });
  });

  it('should not be able to send form', async () => {
    const { getByTestId, getByText } = render(<Form />);

    await waitFor(() => {
      const nameField = getByTestId('name');
      const cpfField = getByTestId('cpf');
      const emailField = getByTestId('email');
      const phoneField = getByTestId('phone');
      const buttonElement = getByText('Cadastrar');

      fireEvent.change(nameField, { target: { value: '' } });
      fireEvent.change(emailField, { target: { value: '' } });
      fireEvent.change(cpfField, { target: { value: '' } });
      fireEvent.change(phoneField, { target: { value: '' } });
      fireEvent.click(buttonElement);
    });
  });
});
