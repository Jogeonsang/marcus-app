import * as types from '../Actions/action';

const initialState = {
  input : '',
  memos : [
    { id: 0, text: '', checked: false }
  ],
  selectedID : '',
  Keyword : ''
}

// 리듀서 함수를 정의합니다.
const memo= (state = initialState, action) => {
    // // 레퍼런스 생성
    const { memos, input, index, selectedID } = state;
    switch(action.type) {

        case types.CREATE:
            return {
              ...state,
              memos: [
                 ...state.memos,
                {
                  id : memos.length,
                  text : '',
                  checked : false
                }
              ]
            };

          case types.SELECT:
          console.log(action.id)
            return {
              ...state,
              selectedID : action.id
            };

          case types.UPDATE:
          console.log(action.data.selectedID);
            return {
              ...state,
              memos : memos.map((memo,index)=>
              index === action.data.selectedID ?
               {id: action.data.selectedID,text: action.data.value, checked:false}
               : memo
            )
          }

          case types.CLEAR:
            return {

            }
        default:
            return state;
    }
};

export default memo;
