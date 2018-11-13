import React, {Component} from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.png';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    'todo': "regerg",
                    'title': "Wash and take away the Kurzhiy's cup from WC"
                },
                {
                    'todo': "fewfewf",
                    'title': 'Do some rollton and cigarettes'
                },
                {
                    'todo': "fefewf",
                    'title': 'Finish internship'
                }
            ],
            todo: ''
        };
    };

    createNewToDoItem = () => {
      this.setState(({ list, todo, title }) => ({
        list: [
            ...list,
          {
            todo, title
          }
        ],
        todo: '',
        title: ''
      }));
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
                                            todo={item.todo}
                                            title={item.title}
                                        />
                          }
                        )}
                    </div>

                    <div>
                       <input id='todo' type="text" value={todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                       <input id='title' type="text" value={title} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                       <button className="ToDo-Add" onClick={this.createNewToDoItem}>+</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;
