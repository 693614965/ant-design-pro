import React, { PureComponent, Fragment } from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import {
  List,
  Card,
  Row,
  Col,
  Radio,
  Input,
  InputNumber,
  Progress,
  Button,
  Icon,
  Dropdown,
  Menu,
  Avatar,
  Modal,
  Form,
  DatePicker,
  Select,
  Badge,
  Popconfirm,
  message,
  Divider,
} from 'antd';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from '../../../List/TableList.less';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const FormItem = Form.Item;

@connect(({ role, loading }) => ({
  role,
  loading: loading.models.role,
}))
@Form.create()
class RoleList extends PureComponent {
  state = {
    selectedRows: [],
    expandForm: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'role/fetch',
      payload: {},
    });
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      page: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'role/fetch',
      payload: params,
    });
  };

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleAdd = () => {
    router.push('/permission-management/role/add');
  };

  handlePermissionConfig = () => {
    const { selectedRows } = this.state;
    if (selectedRows.length === 1) {
      router.push('/permission-management/role/permissAuth/' + selectedRows[0].id);
    } else {
      message.error('请选择一个角色进行权限配置!');
    }
  };

  handleEdit = record => {
    router.push('/permission-management/role/edit/' + record.id);
  };

  handleDelete = record => {
    const { dispatch } = this.props;
    dispatch({
      type: 'role/delete',
      payload: record.id,
    });
  };

  columns = [
    {
      title: '角色名称',
      dataIndex: 'roleName',
    },
    {
      title: '角色编码',
      dataIndex: 'roleCode',
    },
    {
      title: '角色描述',
      dataIndex: 'descr',
    },
    {
      title: '录入日期',
      dataIndex: 'addOn',
    },
    {
      title: '录入人',
      dataIndex: 'addBy',
    },
    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.handleEdit(record)}>编辑</a>
          <Divider type="vertical" />
          <Popconfirm
            title="你确定要删除此记录吗?"
            onConfirm={() => this.handleDelete(record)}
            okText="确定"
            cancelText="取消"
          >
            <a>删除</a>
          </Popconfirm>
        </Fragment>
      ),
    },
  ];

  render() {
    const {
      role: { data },
      loading,
    } = this.props;
    const { selectedRows } = this.state;

    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <div className={styles.tableList}>
            {/* <div className={styles.tableListForm}>{this.renderForm()}</div> */}
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" size="large" onClick={() => this.handleAdd()}>
                新增
              </Button>
              <Button type="primary" size="large" onClick={() => this.handlePermissionConfig()}>
                权限配置
              </Button>
            </div>
            <StandardTable
              bordered
              rowKey="id"
              size="small"
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default RoleList;
