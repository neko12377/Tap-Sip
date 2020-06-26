import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import NavigationBar from '../Presentationl Components/NavigationBar';
import OrdersPage from '../Container Components/OrdersPage';
import OrdersConsulting from '../Container Components/OrdersConsulting';
import AboutUs from '../Presentationl Components/AboutUs';
import InitialPage from '../Presentationl Components/Initial Page';

export default function () {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={InitialPage} />
        <Route path="/ordering" component={OrdersPage} />
        <Route path="/ordersconsulting" component={OrdersConsulting} />
        <Route path="/about_us" component={AboutUs} />
        <Route path="/D">
          DD
          <br />
          <Link to="/D/dd">dd</Link>
          <br />
          <Route path="/D/dd">ddd</Route>
        </Route>
      </Switch>
    </Router>
  );
}
