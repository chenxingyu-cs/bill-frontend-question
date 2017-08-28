import React from 'react';
import { connect } from 'dva';
import styles from './PartitionApp.css';

function PartitionApp({ children }) {
  return (
    <div className={styles.normal}>
      {children}
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(PartitionApp);
