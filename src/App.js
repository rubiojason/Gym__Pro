import HomePage from './work/HomePage';
import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PageContainer from './PageContainer';

function App() {
  return (
      <Switch>
          
          <div>
            <Route path="/" component={PageContainer} />
          </div>

      </Switch>
  );
}

export default App 
