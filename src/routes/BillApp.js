import React from 'react';
import { connect } from 'dva';
import styles from './BillApp.css';
import MainLayout from '../components/MainLayout/MainLayout';

function BillApp({ children }) {
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

export default connect(mapStateToProps)(BillApp);
