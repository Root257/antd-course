import { Table,Modal,Button,Form,Input } from 'antd';
import { connect } from 'dva';
import React, { Component } from 'react';
import SampleChart from '../../components/SampleChart';

const FormItem = Form.Item;
function mapStateToProps(state) {
  return {
    cardsList: state.cards.cardsList,
    cardsLoading: state.loading.effects['cards/queryList'],
  };
}





class List extends React.Component{
  columns = [
    {
      title: '名称',
      dataIndex: 'setup',
    },
    {
      title: '描述',
      dataIndex: 'punchline',
    },
    {
      title: '链接',
      dataIndex: 'url',
    },
    {
      title: '',
      dataIndex: '_',
      render: (_, { id }) => {
        return (
          <Button onClick={() => { this.showStatistic(id); }}>图表</Button>
        );
      },
    },
  ];
  state={
    visible:false,
    statisticVisible: false,
    id: null
  };
  showModal=()=>{
    this.setState({visible:true})
  }
  handleCancel=()=>{
    this.setState({visible:false})
  }
  showStatistic=(id)=>{
    this.props.dispatch({
      type:"cards/getStatistic",
      payload:id
    })
    this.setState({id:id,statisticVisible:true})
  }
  handleOk=()=>{
    const {dispatch,form:{validateFields }} = this.props
    validateFields((err,values)=>{
      if(!err){
        dispatch({
          type:"cards/addNewCard",
          payload:values
        })
        this.setState({visible:false})
      }
    })
    this.setState({visible:false})
  }
  componentDidMount(){
    this.props.dispatch({type:"cards/queryList"})
  }

  render(){
    const { visible } = this.state;
    const {statisticVisible, id } = this.state;
    const {cardsList,cardsLoading} = this.props
    const {statistic} = this.props
    const { form: { getFieldDecorator } } = this.props;
    return(
      <div>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading}  rowKey="id"></Table>
        <Button onClick={this.showModal}   >新建</Button>
        <Modal visible={visible} title="新建记录" onCancel={this.handleCancel} onOk={this.handleOk} >
          <Form>
            <FormItem label="名称">
              {getFieldDecorator('setup', {
                rules: [{ required: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="描述">
              {getFieldDecorator('punchline')(
                <Input />
              )}
            </FormItem>
            <FormItem label="链接">
              {getFieldDecorator('url', {})(
                <Input />
              )}
            </FormItem>
          </Form>
        </Modal>
        <Modal visible={statisticVisible} >
          <SampleChart data={statistic[id]}></SampleChart>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Form.create()(List));