import { SET_FILTER } from './filterTypes';

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;

    default:
      return state;
  }
};