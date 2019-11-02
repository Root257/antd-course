import { Table } from 'antd';
import { connect } from 'dva';
import React, { Component } from 'react';
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
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
    },
  ];
}



export default connect(mapStateToProps)(List);