import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../../services/base';

import { IData, IDataContext } from './interfaces';

const DataContext = createContext<IDataContext>({} as IDataContext);

export const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IData[]>([]);

  const getData = useCallback(async () => {
    const response = await api.get('/users');
    localStorage.setItem('data', JSON.stringify(response.data));
  }, []);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    localStorage.getItem('data') && setData(JSON.parse(localStorage.getItem('data') || '[]'));
  }, []);

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export function useData(): IDataContext {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useSpace must be used within an DataProvider');
  }

  return context;
}
