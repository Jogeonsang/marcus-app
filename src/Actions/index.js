import * as types from './aciton';

export const create = () => ({
  type : types.CREATE

});

export const change = () => ({
  type : types.CHANGE
})

export const write = (id) => ({
  type : types.WRITE,
  memos.id
})

export const remove = (id) => ({
  type : types.REMOVE,
  id
})
