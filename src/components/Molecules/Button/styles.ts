import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from '../../../constants/theme';
import { IButton } from './interfaces';

export const CustomButton = styled.button<Omit<IButton, 'onClick' | 'text'>>`
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: none;
  outline: none;
  background-color: ${theme.colors.turquoise};
  border-width: 1px;

  width: 100%;
  padding: 15px;
  border-radius: 20px;

  margin-top: 42px;

  cursor: pointer;

  height: 50px;

  :hover {
    opacity: 0.7;
  }

  :disabled {
    background-color: ${theme.colors.lightGrey};
    color: ${theme.colors.grey};
    cursor: not-allowed;

    :hover {
      opacity: 1;
    }
  }
`;

export const CustomButtonText = styled.span`
  color: ${theme.colors.white};
  font-weight: bold;
`;
