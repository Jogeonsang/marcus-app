import * as types from './action';

export const create = (memos) => ({
  type : types.CREATE,
  memos
});

export const remove = (id) => ({
  type : types.REMOVE,
  id
})
