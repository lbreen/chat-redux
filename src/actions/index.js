export const SET_MESSAGES = 'SET_MESSAGES';

export function setMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());

  return {
    type: SET_MESSAGES,
    payload: promise
  };
}

export function selectChannel() {
  return {
    type: 'SELECT_CHANNEL',
    payload: true
  };
}
