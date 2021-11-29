import GlobalStyles from './assets/GlobalStyles';
import { DataProvider } from './contexts/DataContext/DataContext';
import Routes from './routes';

function App() {
  return (
    <DataProvider>
      <GlobalStyles />
      <Routes />
    </DataProvider>
  );
}

export default App;
