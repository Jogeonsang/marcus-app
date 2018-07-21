import * as types from '../Actions/action';

const initialState = {
  input : '',
  memos : [
    { id: 0, text: '안녕하세요!', checked: false },
    { id: 1, text: 'Marcus Memo App 입니다.', checked: false },
    { id: 2, text: '편안하게 무언가 적어보세요!', checked: false }
  ],
  selectedContent : '',
  Keyword : ''
}

// 리듀서 함수를 정의합니다.
function memo(state = initialState, action) {
    // 레퍼런스 생성
    const { memos, input, index, selected } = state;
    index = memos.findIndex(memo => memo.id === memo.id)
    switch(action.type) {

        case types.CREATE:
            return {
                memo: [
                  input: '',
                    ...memo,
                    {
                        id: 0,
                        text: '편안하게 무언가 적어보세요!',
                        checked: false
                    }
                ]
            };

          case types.REMOVE:
            return {
              memo : memos.filter(memo => memos.id !== memo.id)
            };

          case types.WRITE:
            console.log(action)
            return {
              index : memos.findIndex(memo => memo.id === memo.id),
              selected : memo[index]
            }

        default:
            return state;
    }
};

export default memo;
