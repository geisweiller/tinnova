import React, { useCallback } from 'react';
import { Atoms, Molecules } from '../../components';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './styles';
import { validationSchema } from './validation';

const Form: React.FC = () => {
  const methods = useForm({ resolver: yupResolver(validationSchema) });
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    register,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = methods;
  const handleSubmitForm = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <FormProvider {...methods}>
      <S.Container>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Atoms.Input label="Nome completo (sem abreviações)" register={{ ...register('name') }} />
          <Atoms.Input name="email" label="E-mail" register={{ ...register('email') }} />
          <Atoms.Input name="cpf" label="CPF" register={{ ...register('cpf') }} />
          <Atoms.Input name="phone" label="Telefone" register={{ ...register('phone') }} />
          <Molecules.Button type="submit" text="Cadastrar" />
        </form>
      </S.Container>
    </FormProvider>
  );
};

export default Form;
