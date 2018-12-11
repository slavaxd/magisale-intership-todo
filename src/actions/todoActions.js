export const deleteToDoItem = (id) => {
  return {
    type: 'DELETE_ITEM', 
    id
  }
};

export const updateToDoItem = (todo, title, id) => {
  return { 
    type: 'UPDATE_ITEM',
    id,
    todo,
    title
  }
};

export const createNewToDoItem = (todo, title) => { 
  return { 
    type: 'CREATE_ITEM',
    todo,
    title
  }
};