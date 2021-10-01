import * as types from '../constants/ActionTypes'

export const updateTodos = (items) => ({
   type: types.UPDATE_TODOS,
   items
});