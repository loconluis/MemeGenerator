export const RECEIVE_MEMES = 'RECEIVE_MEMES';

function receiveMemes(json) {
  const { memes } = json.data;
  return {
    type: RECEIVE_MEMES,
    memes,
  }
}

function fetchMemesJSON() {
  return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}

export function fetchMemes() {
  return function(dispatch) {
    return fetchMemesJSON()
      .then(json => dispatch(receiveMemes(json)))
  }
}