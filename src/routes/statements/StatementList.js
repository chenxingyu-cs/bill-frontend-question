import React from 'react';
import { connect } from 'dva';
import styles from './StatementList.css';
import StatementListPanel from '../../components/Statements/StatementListPanel';

function StatementList() {
  return (
    <div className={styles.normal}>
      <StatementListPanel />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(StatementList);
