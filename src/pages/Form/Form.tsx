import React, { useCallback, useRef, useState } from 'react';
import { Atoms, Molecules } from '../../components';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import * as S from './styles';
import { SubmitHandler, FormHandles } from '@unform/core';
import { useHistory } from 'react-router';
import { IObjectKeys } from './interfaces';
import { validationSchema } from './validation';

const CustomForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitHandler<FormData> = useCallback(async (formData) => {
    setLoading(true);
    try {
      await validationSchema.validate(formData, {
        abortEarly: false,
      });
      localStorage.setItem('data', JSON.stringify(formData));
      history.push('/list');
    } catch (err) {
      const validationErrors: IObjectKeys = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          const fieldName = error?.path as string;
          validationErrors[fieldName] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
        console.log();
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <S.Container>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Atoms.Input name="name" label="Nome completo (sem abreviações)" data-testid="name" />
        <Atoms.Input name="email" label="E-mail" data-testid="email" />
        <Atoms.Input name="cpf" label="CPF" data-testid="cpf" />
        <Atoms.Input name="phone" label="Telefone" data-testid="phone" />
        <Molecules.Button type="submit" text="Cadastrar" loading={loading} />
      </Form>
    </S.Container>
  );
};

export default CustomForm;
