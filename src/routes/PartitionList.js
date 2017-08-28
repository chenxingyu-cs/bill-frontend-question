import React from 'react';
import { connect } from 'dva';
import styles from './PartitionList.css';

function PartitionList() {
  return (
    <div className={styles.normal}>
      Route Component: PartitionList
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(PartitionList);
