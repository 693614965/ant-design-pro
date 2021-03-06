import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Button, Card, Cascader, Form, Input, InputNumber, Select } from 'antd';
import { connect } from 'dva';
import React, { PureComponent } from 'react';
import router from 'umi/router';
import styles from '../../../List/TableList.less';

const FormItem = Form.Item;
const { Option } = Select;

@connect(({ menu, loading }) => ({
  menu,
  loading: loading.models.menu,
}))
@Form.create()
class menuEdit extends PureComponent {
  state = {};

  componentDidMount = () => {
    console.log(this.props.match.params.id);
    const { dispatch } = this.props;
    dispatch({
      type: 'menu/get',
      payload: this.props.match.params.id,
    });
    dispatch({
      type: 'menu/fetch',
      payload: {},
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { dispatch } = this.props;
        if (!values.pid) {
        } else {
          values.pid = values.pid[values.pid.length - 1];
        }
        values.id = this.props.match.params.id;
        dispatch({
          type: 'menu/update',
          payload: values,
        });
      }
    });
  };

  handleCancle = e => {
    router.push('/system-management/menu/list');
  };

  render() {
    const {
      form: { getFieldDecorator },
      menu: { data, menu },
    } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 4,
        },
      },
    };
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <div className={styles.tableList}>
            <Form {...formItemLayout} onSubmit={this.handleSubmit} labelAlign="right">
              <FormItem label="上级菜单">
                {getFieldDecorator('pid', {
                  initialValue: [menu.pid],
                  rules: [
                    {
                      required: false,
                      message: '请选择',
                    },
                  ],
                })(
                  <Cascader
                    fieldNames={{ label: 'name', value: 'id', children: 'children' }}
                    changeOnSelect
                    options={data.list}
                    placeholder="上级菜单"
                    size="large"
                  />
                )}
              </FormItem>
              <FormItem label="name">
                {getFieldDecorator('name', {
                  initialValue: menu.name,
                  rules: [
                    {
                      required: true,
                      message: '请输入name',
                    },
                  ],
                })(<Input placeholder="name" size="large" />)}
              </FormItem>
              <FormItem label="path">
                {getFieldDecorator('path', {
                  initialValue: menu.path,
                  rules: [
                    {
                      required: true,
                      message: '请输入path',
                    },
                  ],
                })(<Input placeholder="path" size="large" />)}
              </FormItem>
              <FormItem label="icon">
                {getFieldDecorator('icon', {
                  initialValue: menu.icon,
                  rules: [
                    {
                      required: true,
                      message: '请输入icon',
                    },
                  ],
                })(<Input placeholder="icon" size="large" />)}
              </FormItem>
              <FormItem label="sort">
                {getFieldDecorator('sort', {
                  initialValue: menu.sort,
                  rules: [
                    {
                      required: true,
                      message: '请输入sort',
                    },
                  ],
                })(<InputNumber placeholder="sort" style={{ width: '100%' }} size="large" />)}
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" icon="check" size="large">
                  确定
                </Button>
                <Button
                  style={{ marginLeft: 8 }}
                  onClick={this.handleCancle}
                  icon="close"
                  type="danger"
                  size="large"
                >
                  取消
                </Button>
              </FormItem>
            </Form>
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default menuEdit;
