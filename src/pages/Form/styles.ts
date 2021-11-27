import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.grey};
  border-radius: 10px;
  padding: 60px 20px;
  box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.1);
`;
