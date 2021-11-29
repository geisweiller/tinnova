export interface IInput
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  name: string;
  error?: boolean;
}
