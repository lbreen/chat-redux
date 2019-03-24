import { SELECT_CHANNEL } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case SELECT_CHANNEL: {
      return action.payload;
    }
    default:
      return state;
  }
}
