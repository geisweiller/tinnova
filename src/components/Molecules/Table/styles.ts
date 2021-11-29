import styled from 'styled-components';
import { theme } from '../../../constants/theme';

export const Table = styled.table`
  border-spacing: 0;
  border: 1px solid black;
  border-radius: 15px;
`;

export const Tr = styled.tr`
  :last-child {
    td {
      border-bottom: 0;
    }
  }
`;

export const Th = styled.th`
  margin: 0;
  padding: 0.5rem;

  background-color: ${theme.colors.turquoise};

  :last-child {
    border-right: 0;
    border-top-right-radius: 15px;
  }
  :first-child {
    border-top-left-radius: 15px;
  }
`;

export const Td = styled.td`
  margin: 0;

  padding: 0.5rem;
  border-bottom: 1px solid black;

  img {
    margin-left: 20px;
    cursor: pointer;
    width: 20px;
  }

  :last-child {
    border-right: 0;
  }
`;
