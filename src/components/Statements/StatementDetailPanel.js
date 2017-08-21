import React from 'react';
import { Table, Row, Pagination } from 'antd';
import styles from './StatementDetailPanel.css';
import { MOCK_DETAILS } from '../../utils/constants';

const columns = [
  {
    title: '交易流水号',
    dataIndex: 'transctionId',
    key: 'transctionId',
  },
  {
    title: '订单编号',
    dataIndex: 'orderId',
    key: 'orderId',
  },
  {
    title: '应收账款',
    dataIndex: 'expectedIncome',
    key: 'expectedIncome',
  },
  {
    title: '应付账款',
    dataIndex: 'expectedOutcome',
    key: 'expectedOutcome',
  },
  {
    title: '实收账款',
    dataIndex: 'actualIncome',
    key: 'actualIncome',
  },
  {
    title: '实付账款',
    dataIndex: 'actualOutcome',
    key: 'actualOutcome',
  },
  {
    title: '优惠金额',
    dataIndex: 'discount',
    key: 'discount',
  },
  {
    title: '支付方式',
    dataIndex: 'payment',
    key: 'payment',
  },
  {
    title: '时间',
    dataIndex: 'date',
    key: 'date',
  },
];

class StatementDetailPanel extends React.Component {
  render() {
    const tablePagination = (
      <Pagination pageSize={25} />
    );
    return (
      <div className={styles.normal}>
        <Row gutter={16} className={styles.controlPanel} >
          <div className={styles.center}>
            账单明细
          </div>
        </Row>

        <Row>
          <Table
            pagination={tablePagination}
            columns={columns}
            dataSource={MOCK_DETAILS}
          />
        </Row>
      </div>
    );
  }
}

export default StatementDetailPanel;
