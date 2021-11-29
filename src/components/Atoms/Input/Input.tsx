import React, { useEffect, useRef } from 'react';
import { IInput } from './interfaces';
import { useField } from '@unform/core';

import * as S from './styles';

const Input = ({ name, label, ...props }: IInput) => {
  const { fieldName, defaultValue = '', registerField, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  console.log(error);
  return (
    <div>
      <S.CustomLabel>{label}</S.CustomLabel>
      <S.CustomInput
        {...props}
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        error={!!error}
      />
      <S.CustomError>{error}</S.CustomError>
    </div>
  );
};

export default Input;
