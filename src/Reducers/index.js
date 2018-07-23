import * as types from '../Actions/action';

const initialState = {
  input : '',
  memos : [
    { id: 0, text: '', checked: false }
  ],
  selectedContent : '',
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
                  id : memos.length + 1,
                  text : '',
                  checked : false
                }
              ]
            };
        default:
            return state;
    }
};

export default memo;
