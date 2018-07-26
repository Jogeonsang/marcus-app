import * as types from './action';

export const create = () => (
  {
  type : types.CREATE
}
);
export const remove = (id) => ({
  type : types.REMOVE,
  id
})

export const select = (id) => ({
  type : types.SELECT,
  id
})

export const update = (data) => ({
  type : types.UPDATE,
  data
})

export const clear = (value) => ({
  type : types.CLEAR,
  value
})
