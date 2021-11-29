import styled from 'styled-components';
import { theme } from '../../../constants/theme';
import { IInput } from './interfaces';

export const CustomInput = styled.input<Omit<IInput, 'name' | 'label'>>`
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;
  border-color: ${(props) => (props.error ? theme.colors.red : theme.colors.darkGrey)};

  border-width: 1px;

  background-color: transparent;

  padding: 0 0 2px 2px;
  margin-bottom: 8px;
  width: 100%;

  color: ${theme.colors.darkGrey};
  font-weight: bold;
`;

export const CustomError = styled.p`
  font-size: 12px;
  color: ${theme.colors.red};
`;

export const CustomLabel = styled.label`
  font-size: 12px;
  color: ${theme.colors.grey};
`;
