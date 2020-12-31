
import routes from './route.js'
// import './assets/css/red.less';
// import './assets/css/blue.less';
import './assets/css/index.less'
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';

function App() {
  let themeColor = 'blue'
  require([`./assets/css/${themeColor}.less`], function(list){});
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
