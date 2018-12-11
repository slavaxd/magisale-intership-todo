const initState = {
  list: [
    {
      'title': 'Today',
      'todo': "Wash and take away the Kurzhiy's cup from WC"
    },
    {
      'title': 'Tomorrow',
      'todo': 'Do some rollton and cigarettes'
    }
  ],
/*  title: '123',
  todo: '456'*/
};

const rootReducer = (state = initState, action) => {
  switch(action.type){
    case 'DELETE_ITEM':
      let newTodoList = state.list.filter((item, i) => {return action.id !== i});
      return {
        ...state,
        list: newTodoList
      };
      
    case 'UPDATE_ITEM':    
      let myObj = state.list[action.id];
      myObj.title = action.title;
      myObj.todo = action.todo;
      return {
        ...state,
        todo: myObj.todo,
        title: myObj.title,
      }; 
      
    case 'CREATE_ITEM':
      return {
        ...state,
        list: [
          ...state.list,
          {
            todo: action.todo, 
            title: action.title
          }
        ],
        todo: '',
        title: '',
      };   

    default:
      return state;
  }
  
  return state;
};

export default rootReducer;