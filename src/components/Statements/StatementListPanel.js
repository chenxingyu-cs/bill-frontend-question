import React from 'react';
import { Select, DatePicker, Button, Table, Icon, Row, Col, Pagination } from 'antd';
import styles from './StatementListPanel.css';

const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const columns = [
  {
    title: '门店',
    dataIndex: 'stationName',
    key: 'stationName',
  },
  {
    title: '账单异常',
    dataIndex: 'isBalanced',
    key: 'isBalanced',
    render: text => <span>{text ? '正常账单' : '异常账单'}</span>,
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
    title: '明细',
    dataIndex: 'detail',
    key: 'detail',
    render: text => <a href={text}><Icon type="file-text" /></a>,
  },
  {
    title: '下载',
    dataIndex: 'downloadUrl',
    key: 'downloadUrl',
    render: text => <a href={text}><Icon type="download" /></a>,
  },
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  },
];

class StatementListPanel extends React.Component {

  onFranchiseeChange = (value) => {
    console.log(`selected ${value}`);
  }

  onDateChange = (date, dateString) => {
    console.log(date, dateString);
  }

  render() {
    return (
      <div className={styles.normal}>
        <Row gutter={16} className={styles.controlPanel} >
          <Col span={6}>
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.onFranchiseeChange}>
              <Option value="jack">净悦加盟商</Option>
              <Option value="lucy">测试加盟商</Option>
              <Option value="Yiminghe">Demo加盟商</Option>
            </Select>
          </Col>

          <Col span={6}>
            <RangePicker onChange={this.onDateChange} />
          </Col>

          <Col span={6} offset={6}>
            <Button type="primary" icon="search">查询</Button>
          </Col>
        </Row>

        <Row>
          <Table
            pagination={false}
            columns={columns}
            rowKey={record => record.id}
            dataSource={this.props.statements}
          />
          <Pagination
            pageSize={10}
            total={21}
            current={1}
          />
        </Row>
      </div>
    );
  }
}

export default StatementListPanel;
