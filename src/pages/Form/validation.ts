import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required('Campo Obrigatório'),
  email: yup.string().required('Campo Obrigatório').email('Email inválido'),
  cpf: yup.string().required('Campo Obrigatório').length(11, 'O CPF deve conter 11 caracteres'),
  phone: yup
    .string()
    .required('Campo Obrigatório')
    .length(11, 'O telefone deve conter 11 caracteres'),
});
