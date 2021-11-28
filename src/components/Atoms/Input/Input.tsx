import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IInput } from './interfaces';

import * as S from './styles';

const Input = ({ name, label, error, register, ...props }: IInput) => {
  console.log(register);
  return (
    <S.Container>
      <S.CustomLabel>{label}</S.CustomLabel>
      <input {...props} {...register} />
      <S.CustomError>{error}</S.CustomError>
    </S.Container>
  );
};

export default Input;
