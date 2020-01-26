import { ActionType, ErrorActionTypes } from '../actions/errors.action';

export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error: null
};

export const errorReducer: (state: ErrorState, action: ActionType) => ErrorState = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case ErrorActionTypes.ADD_ERROR:
      return { ...state, error: action.payload };
    case ErrorActionTypes.REMOVE_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};