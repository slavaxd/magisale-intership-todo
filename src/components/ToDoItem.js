import React, {Component} from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {

    render() {
        return (
            <div className="ToDoItem">
                <p className="ToDoItem-Text">{this.props.title}</p>
                <p className="ToDoItem-Text">{this.props.todo}</p>
            </div>
        );
    }
}

export default ToDoItem;
