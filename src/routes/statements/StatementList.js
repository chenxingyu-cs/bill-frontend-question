import React from 'react';
import { connect } from 'dva';
import styles from './StatementList.css';
import StatementListPanel from '../../components/Statements/StatementListPanel';

class StatementList extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'statements/fetch',
      payload: {
        page: 1,
      },
    });
  }

  render() {
    return (
      <div className={styles.normal}>
        <StatementListPanel statements={this.props.list} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.statements;
}

export default connect(mapStateToProps)(StatementList);
