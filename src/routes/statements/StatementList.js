import React from 'react';
import { connect } from 'dva';
import styles from './StatementList.css';

function StatementList() {
  return (
    <div className={styles.normal}>
      Route Component: StatementList
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(StatementList);
