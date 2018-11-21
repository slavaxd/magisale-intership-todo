import React, {Component} from 'react';
import './ToDo.css';
import 'font-awesome/css/font-awesome.min.css';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.png';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            todo: '',
            title: ''
        };
    };

    createNewToDoItem = () => {
      const { list, todo, title } = this.state;
      this.setState(() => ({
        list: [
            ...list,
          {
            todo: todo, title: title
          }
        ],
        todo: '',
        title: ''
      }));
    };

    deleteToDoItem = (id) => {
      let todoList = this.state.list.filter((item, i) => {return i !== id});
      this.setState({
          list: todoList
      });
    };

    handleKeyPress = e => {
        if (e.target.value !== '') {
          if (e.key === 'Enter') {
            this.createNewToDoItem();
          }
        }
    };

    handleInput = e => {
      this.setState({
        [e.target.id]: e.target.value
      });
    };

    updateData = (valueTodo, valueTitle, valueId) => {
      let myObj = this.state.list[valueId];
      myObj.title = valueTitle;
      myObj.todo = valueTodo;

      this.setState({
        todo: myObj.todo,
        title: myObj.title,

        todo: '',
        title: ''
      });
    };

    render() {
        const { list, todo, title } = this.state;
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo"/>
                <h1 className="ToDo-Header">MAGISOFT REACT INTERNSHIP TODO</h1>
                <div className="ToDo-Container">
                    <div className="ToDo-Content">

                        {list.map((item, key) => {
                            return <ToDoItem
                                      key={key}
                                      id={key}
                                      todo={item.todo}
                                      title={item.title}
                                      deleteToDoItem={this.deleteToDoItem}
                                      updateData={this.updateData}
                                    />
                          }
                        )}
                    </div>
                    <div>
                        <input autoFocus id='title' placeholder="title" type="text" value={title} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                        <input id='todo' placeholder="to do" type="text" value={todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                        <button className="ToDo-Add" onClick={this.createNewToDoItem}>+</button>

                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;
