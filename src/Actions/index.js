import * as types from './action';

export const create = (memo) => (
  {
  type : types.CREATE,
  memo
}
);
export const remove = (id) => ({
  type : types.REMOVE,
  id
})
