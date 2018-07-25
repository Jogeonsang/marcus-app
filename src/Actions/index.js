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

export const update = (value) => ({
  type : types.UPDATE,
  value
})
