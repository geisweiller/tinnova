import { render } from '@testing-library/react';
import React from 'react';
import { Loading } from '..';

describe('Input Component', () => {
  it('should be able to render a loading', () => {
    const { getByTestId } = render(<Loading />);

    expect(getByTestId('loading')).toBeTruthy();
  });
});
