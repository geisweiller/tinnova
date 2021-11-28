import React from 'react';
import { useForm } from 'react-hook-form';
import { IInput } from './interfaces';

import * as S from './styles';

const Input = ({ name, label, error, ...props }: IInput) => {
  const { register } = useForm();
  return (
    <S.Container>
      <S.CustomLabel>{label}</S.CustomLabel>
      <input {...props} {...register(name)} />
      <S.CustomError>{error}</S.CustomError>
    </S.Container>
  );
};

export default Input;
