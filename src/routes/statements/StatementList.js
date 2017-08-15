import React from 'react';
import { connect } from 'dva';
import styles from './StatementList.css';
import StatementListPanel from '../../components/Statements/StatementListPanel';
import MainLayout from '../../components/MainLayout/MainLayout';

function StatementList() {
  return (
    <MainLayout >
      <div className={styles.normal}>
        <StatementListPanel />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(StatementList);
