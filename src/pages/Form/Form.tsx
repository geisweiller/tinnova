import React from 'react';
import { Atoms, Molecules } from '../../components';

import * as S from './styles';

const Form: React.FC = () => {
  return (
    <S.Container>
      <Atoms.Input label="Nome completo (sem abreviações)" />
      <Atoms.Input label="E-mail" />
      <Atoms.Input label="CPF" />
      <Atoms.Input label="Telefone" />
      <Molecules.Button text="Cadastrar" handleClick={() => console.log('')} />
    </S.Container>
  );
};

export default Form;
