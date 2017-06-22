const HelloReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      console.log('CHANGE_TEXT from HelloReducer');
      return Object.assign({}, state, {text: action.text});
    case 'CHANGE_CPU':
      console.log('CHANGE_CPU from HelloReducer');
      return Object.assign({}, state, {cpu: action.text, memory: action.text});

    default:
      console.log('Default value from HelloReducer');
      return state;
  }
}

export default HelloReducer;