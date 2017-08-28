import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
// import IndexPage from './routes/IndexPage';

import BillApp from './routes/BillApp.js';

import StatementApp from './routes/statements/StatementApp.js';
import StatementList from './routes/statements/StatementList.js';
import StatementDetail from './routes/statements/StatementDetail.js';

import PartitionApp from './routes/PartitionApp.js';
import PartitionList from './routes/PartitionList.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/bill/statement/list" />
      <Route path="/bill" component={BillApp} >
        <Route path="statement" component={StatementApp} >
          <Route path="list" component={StatementList} />
          <Route path="detail/:stationId" component={StatementDetail} />
        </Route>
        <Route path="partition" component={PartitionApp} >
          <Route path="list" component={PartitionList} />
        </Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
