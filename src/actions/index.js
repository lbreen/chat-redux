export const SET_MESSAGES = 'SET_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

const url = 'https://wagon-chat.herokuapp.com/general/messages';

export function setMessages() {
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: SET_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {

  const body = { channel, author, content };

  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  debugger;
  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}
