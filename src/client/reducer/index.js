export default function reducer(state = {}, action){
  switch(action.type){
    case 'set-lines':
      state.lines = action.value
      break
  }
  return state
}
