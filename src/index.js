import dva from 'dva';
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva({
  history: browserHistory,
});

// 2. Plugins
app.use(createLoading());

app.model(require('./models/statements'));

// 3. Model

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
