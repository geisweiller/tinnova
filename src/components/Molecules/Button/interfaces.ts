export interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  handleClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}
