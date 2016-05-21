export default function reducer(state = {}, action){
  switch(action.type){
    case 'set-text':
      state.text = action.value
      break
  }
  return state
}
