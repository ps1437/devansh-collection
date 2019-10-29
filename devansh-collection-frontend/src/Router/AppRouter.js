import { Route, BrowserRouter as Router } from 'react-router-dom'

import HomePage from '../component/HomePage';
import Product from '../component/Product';
import ProductAdd from '../component/ProductAdd';

export const Routers = (
  <Router>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/home" exact={true} component={Product} />
      <Route path="/product"  exact={true} component={ProductAdd} />
      <Route path="/product/add" exact={true}  component={ProductAdd} />

  </Router>
)