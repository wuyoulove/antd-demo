
import routes from './route.js'
import './assets/css/index.less'
import store from '@/store/index.js'
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';
  const state = {
    themeColor:store.getState().themeColor,
  }
function App() {
  require([`./assets/css/${state.themeColor}.less`], function(list){});
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
