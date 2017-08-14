import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
// import IndexPage from './routes/IndexPage';

import BillApp from './routes/BillApp.js';

import StatementApp from './routes/statements/StatementApp.js';
import StatementList from './routes/statements/StatementList.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/bill/statement/list" />
      <Route path="/bill" component={BillApp} >
        <Route path="statement" component={StatementApp} >
          <Route path="list" component={StatementList} />
        </Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
