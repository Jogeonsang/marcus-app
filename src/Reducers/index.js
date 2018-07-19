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
    const { memo } = state;

    switch(action.type) {

        case types.CREATE:
            return {
                memo: [
                    ...memo,
                    {
                        id: 0,
                        text: '편안하게 무언가 적어보세요!',
                        checked: false
                    }
                ]
            };
        default:
            return state;
    }
};

export default memo;
