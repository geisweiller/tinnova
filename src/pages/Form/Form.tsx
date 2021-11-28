import React, { useCallback } from 'react';
import { Atoms, Molecules } from '../../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './styles';
import { validationSchema } from './validation';

const Form: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    register,
    formState: { errors, isDirty },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const handleSubmitForm = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <S.Container>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Atoms.Input name="name" label="Nome completo (sem abreviações)" />
        <Atoms.Input name="email" label="E-mail" />
        <Atoms.Input name="cpf" label="CPF" />
        <Atoms.Input name="phone" label="Telefone" />
        <Molecules.Button type="submit" text="Cadastrar" />
      </form>
    </S.Container>
  );
};

export default Form;
