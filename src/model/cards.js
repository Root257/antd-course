import request from '../util/request';



export default {
  namespace:"cards",
  state:{
    cardsList:[],
    result: [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 1150 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ]
  },
  effects:{
    *queryList(_,sagaEffects){
      const {call,put} = sagaEffects;
      const endPointURI= '/posts/1';

      const puzzle = yield call(request,endPointURI)
      yield put({type:'addNewCard',payload:puzzle});
    }
  },
  reducers:{
    addNewCard(state,{payload:newCard}){
      const nextData =state.cardsList.concat(newCard)
      return{
        cardsList:nextData,
      };
    },
    getStatistic(state,{payload:id}){
      const nextData =state.cardsList.concat(newCard)
      return{
        cardsList:nextData,
      };
    }
  }
}