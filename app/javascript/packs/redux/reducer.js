import api from './api';

// Action Type
const GET_RANDOM_MESSAGE = 'hello_rails_react/GET_RANDOM_MESSAGE';

// Action Creator
const getRandomMessage = () => {
  return async dispatch => {
    const { data } = await api.get('/message/random');
    dispatch({ type: GET_RANDOM_MESSAGE, payload: data.attributes });
  };
}

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_RANDOM_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

export { getRandomMessage, reducer };