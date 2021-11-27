import styled from 'styled-components';
import { theme } from '../../../constants/theme';

export const CustomButton = styled.button`
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

  min-height: 50px;

  :hover {
    opacity: 0.7;
  }
`;

export const CustomButtonText = styled.span`
  color: ${theme.colors.white};
  font-weight: bold;
`;
