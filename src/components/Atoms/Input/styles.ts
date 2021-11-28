import styled from 'styled-components';
import { theme } from '../../../constants/theme';

export const Container = styled.div`
  input {
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
    border-color: ${theme.colors.darkGrey};
    border-width: 1px;

    background-color: transparent;

    padding: 0 0 2px 2px;
    margin-bottom: 8px;
    width: 100%;

    color: ${theme.colors.darkGrey};
    font-weight: bold;
  }
`;

export const CustomError = styled.p`
  font-size: 12px;
  color: ${theme.colors.red};
`;

export const CustomLabel = styled.label`
  font-size: 12px;
  color: ${theme.colors.grey};
`;
