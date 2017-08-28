import React from 'react';
import { connect } from 'dva';
import styles from './StatementApp.css';
import MainLayout from '../../components/MainLayout/MainLayout';

function StatementApp({ children }) {
  return (
    <MainLayout>
      <div className={styles.normal}>
        {children}
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(StatementApp);
