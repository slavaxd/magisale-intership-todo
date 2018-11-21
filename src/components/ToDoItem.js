import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import FormDialog from './FormDialog';
import './ToDoItem.css';



class ToDoItem extends Component {
    handleInput = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
    };

    render() {
        return (
            <div className="ToDoItem">

              <div className="ToDoItem-Text">
                <b>Title:</b>
                {this.props.title}
                <br/>
                <b>To do:</b>
                {this.props.todo}
              </div>

              <FormDialog
                updateData={this.props.updateData}
                title={this.props.title}
                todo={this.props.todo}
                id={this.props.id}
              />

              <Button variant="contained" color="secondary" className="ToDo-Delete"
                      onClick={() => this.props.deleteToDoItem(this.props.id)}>
                <i className="fa fa-trash fa-2x"></i>
              </Button>

            </div>
        );
    }
}

export default ToDoItem;
