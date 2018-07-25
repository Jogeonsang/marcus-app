import * as types from '../Actions/action';

const initialState = {
  input : '',
  memos : [
    { id: 0, text: '아', checked: false }
  ],
  selectedID : { id: 0, text: '', checked: false },
  Keyword : ''
}

// 리듀서 함수를 정의합니다.
const memo= (state = initialState, action) => {
    // // 레퍼런스 생성
    const { memos, input, index, selected } = state;
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
            return {
              ...state,
              selectedID : action.value
              
            }
        default:
            return state;
    }
};

export default memo;
