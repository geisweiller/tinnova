import React, { useCallback } from 'react';
import { Atoms } from '../..';
import { IButton } from './interfaces';

import * as S from './styles';

const Button = ({ loading, text, handleClick }: IButton) => {
  const HandleLoading = useCallback(() => {
    if (loading) {
      return <Atoms.Loading />;
    }
    return <S.CustomButtonText>{text}</S.CustomButtonText>;
  }, [loading, text]);

  return (
    <S.CustomButton>
      <HandleLoading />
    </S.CustomButton>
  );
};

export default Button;
