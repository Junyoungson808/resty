function reducer(state, action) {
  switch (action.type) {
    case 'SET_REQ_PARAMS':
      return { ...state, requestParams: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'HISTORY':
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  };
};

export default reducer;