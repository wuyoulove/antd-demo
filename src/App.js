
import routes from './route.js'
// import './App.less';
import './assets/css/index.less'
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
            {
                routes.map((route,i) => (
                    <Route exact={route.exact} path={route.path} component={route.component} key={route.path}></Route>))
            }
        </Switch>
            </Router>
  );
}

export default App;
