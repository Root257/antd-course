import React, { Component } from 'react';
import {Card,Button} from "antd"
import { connect } from 'dva';
const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  const cardList = state[namespace];
  return {
    cardList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount:()=>{
      dispatch({type:`${namespace}/queryInitCards`})
    }
  };
};

@connect(mapStateToProps,mapDispatchToProps)
export default class PuzzleCardsPage  extends Component{
  componentDidMount(){
    this.props.onDidMount()
  }
  // constructor(props){
  //   super(props);
  //   this.counter = 100
  //   this.state={
  //     cardList:[
  //       {
  //         id: 1,
  //         setup: 'Did you hear about the two silk worms in a race?',
  //         punchline: 'It ended in a tie',
  //       },
  //       {
  //         id: 2,
  //         setup: 'What happens to a frog\'s car when it breaks down?',
  //         punchline: 'It gets toad away',
  //       },
  //     ]
  //   }
  // }
  // addNewCard= () => {
  //   this.setState(prevState =>{
  //     const list = prevState.cardList;
  //     this.counter +=1;
  //     const card = {
  //       id: this.counter,
  //       setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  //       punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     };
  //     return {
  //       cardList: list.concat(card),
  //     };
  //   })
  // }
  render(){
    return(
      <div>
        {
          this.props.cardList.data.map(card=>{
            return(
              <Card key={card.id}>
                <div>Q:{card.title}</div>
                <div>
                  <strong>A:{card.body}</strong>
                </div>
              </Card>
            )
          })
        }
        <div>
          <Button onClick={()=>{
            this.props.onClickAdd({
              setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              punchline: 'here we use dva',
            })}}>添加卡片</Button>
        </div>
      </div>
    )
  }
}