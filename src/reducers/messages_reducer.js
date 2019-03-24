import { SET_MESSAGES, CREATE_MESSAGE } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE: return {
      // TODO
    };
    default:
      return state;
  }
}
