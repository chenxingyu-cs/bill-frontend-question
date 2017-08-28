// import request from '../utils/request';
// import { HOST_URL, MOCK_STATEMENTS } from '../utils/constants';
import { MOCK_STATEMENTS } from '../utils/constants';

export async function fetch({ page = 1 }) {
  console.log('fetch statements', MOCK_STATEMENTS, page);
  // return request('http://192.168.3.49:8000/balance/query?shopId=28&startDate=2017-08-05&endDate=2017-08-08');
  return MOCK_STATEMENTS;
}
