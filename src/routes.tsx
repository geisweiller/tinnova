import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Form, List } from './pages/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/form" component={Form} />
      <Route path="/list" component={List} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
