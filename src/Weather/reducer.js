export default (state = {status: 'loading'}, action) => {
  switch (action.type) {
    case 'FETCH_STARTED/WEATHER':
      return {status: 'loading'}

    case 'FETCH_SUCCESS/WEATHER':
      return {status: 'success', ...action.result}

    case 'FETCH_FAILURE/WEATHER':
      return {status: 'failure'}

    default:
      return state
  }
}
