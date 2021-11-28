import { Control } from 'react-hook-form';

export interface IInput
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  error?: string;
  name?: string;
  register?: any;
}
