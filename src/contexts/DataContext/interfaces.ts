export interface IDataContext {
  data: IData[] | [];
  setData: (data: IData[]) => void;
}

export interface IData {
  name: string;
  email: string;
  cpf: string;
  phone: string;
}
