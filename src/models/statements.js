import * as statementsService from '../services/statements';

export default {
  namespace: 'statements',
  state: {
    list: [],
  },
  reducers: {
    save(state, { payload: { data } }) {
      const result = { list: data };
      return { ...state, ...result };
    },
  },

  effects: {
    *fetch({ payload: { page } }, { call, put }) {
      // const { data } = yield call(statementsService.fetch, { page });
      const data = yield call(statementsService.fetch, { page });
      console.log(data);
      yield put({ type: 'save', payload: { data } });
    },
  },

  subscriptions: {},

};
