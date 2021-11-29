import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { Button } from '..';

describe('Input Component', () => {
  it('should be able to render an button', async () => {
    const { getByTestId } = render(<Button text="Cadastrar" />);

    await waitFor(() => {
      expect(getByTestId('button')).toBeTruthy();
    });
  });
});
