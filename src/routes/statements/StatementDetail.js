import React from 'react';
import { connect } from 'dva';
import styles from './StatementDetail.css';
import StatementDetailPanel from '../../components/Statements/StatementDetailPanel';
import MainLayout from '../../components/MainLayout/MainLayout';

class StatementDetail extends React.Component {

  render() {
    return (
      <MainLayout >
        <div className={styles.normal}>
          <StatementDetailPanel />
        </div>
      </MainLayout>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(StatementDetail);
