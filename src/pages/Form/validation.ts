import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .length(3, 'Campo deve conter 3 caracteres ou mais')
    .required('Campo Obrigatório'),
  email: yup.string().required('Campo Obrigatório'),
  cpf: yup.string().required('Obrigatório'),
  phone: yup.string().required('Campo Obrigatório'),
});
