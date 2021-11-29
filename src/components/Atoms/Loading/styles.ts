import { theme } from '../../../constants/theme';

import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CustomSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-right: 3px solid ${theme.colors.white};
  border-bottom: 3px solid ${theme.colors.white};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
