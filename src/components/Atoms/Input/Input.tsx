import React from 'react';
import { IInput } from './interfaces';

import * as S from './styles';

const Input = ({ label, error, type }: IInput) => {
  return (
    <S.Container>
      <S.CustomLabel>{label}</S.CustomLabel>
      <S.CustomInput type={type} />
      <S.CustomError>{error}</S.CustomError>
    </S.Container>
  );
};

export default Input;
