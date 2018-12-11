import React, {Component} from 'react';
import './ToDo.css';
import 'font-awesome/css/font-awesome.min.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.png';
import { connect } from 'react-redux';
import { createNewToDoItem } from './actions/todoActions';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            todo: '',
            title: ''
        };
    };

/*    createNewToDoItem = () => {
      const { list, todo, title } = this.props;
      this.setState(() => ({
        list: [
            ...list,
          {todo: todo, title: title}
        ],
        todo: '',
        title: ''
      }));
    };*/

/*    deleteToDoItem = (id) => {
      let todoList = this.state.list.filter((item, i) => {return i !== id});
      this.setState({
          list: todoList
      });
    };*/

    handleKeyPress = e => {
        if (e.target.value !== '') {
          if (e.key === 'Enter') {
            this.props.createNewToDoItem(this.state.todo, this.state.title);
          }
        }
    };

    handleInput = name => e => {
      this.setState({
        [name]: e.target.value
      });
    };

    handleCreateItem = () => {
      this.props.createNewToDoItem(this.state.todo, this.state.title); 
    };

/*    updateToDoItem = (valueTodo, valueTitle, valueId) => {
      let myObj = this.state.list[valueId];
      myObj.title = valueTitle;
      myObj.todo = valueTodo;

      this.setState({
        todo: myObj.todo,
        title: myObj.title,

        todo: '',
        title: ''
      });
    };*/

    render() {
      console.log(this.props);
      const { list, todo, title } = this.props;
        return (
            <div className="ToDo">
                <div className="ToDo-Head">
                  <img className="Logo" src={Logo} alt="React logo"/>
                  <h1 className="ToDo-Header">MAGISOFT REACT INTERNSHIP TODO</h1>
                </div>
                <div className="ToDo-Container">
                    <div className="ToDo-Content">

                        { list.map( (item, key) => {
                          return <ToDoItem
                                    key={key}
                                    id={key}
                                    todo={item.todo}
                                    title={item.title}
                                  />
                          }
                        ) }
                    </div>
                    <div className="ToDo-Form">
                      <form action="#">
                         <TextField autoFocus fullWidth
                           margin="normal"
                           id='title'  
                           label="Title"
                           type="text" 
                           value={this.state.value} 
                           onChange={this.handleInput('title')} 
                           onKeyPress={this.handleKeyPress}
                         />
                         <br/>
                         <TextField fullWidth
                           margin="normal"
                           id='todo' 
                           label="What to do:"
                           type="text" 
                           value={this.state.todo} 
                           onChange={this.handleInput('todo')} 
                           onKeyPress={this.handleKeyPress}
                         />
                        
                         <button className="ToDo-Add" onClick={ this.handleCreateItem }>+</button>
                      </form>
                    </div>
                </div>
            </div>
        );
    }
}

const MapStateToProps = (state) => {
  return {
    list: state.list,
    todo: state.todo,
    title: state.title
  }
};

const MapDispatchToProps = (dispatch) => {
  return {
    createNewToDoItem: (todo, title) => {dispatch(createNewToDoItem(todo, title))}
  }
};

export default connect(MapStateToProps, MapDispatchToProps)(ToDo);
