import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import FormDialog from './FormDialog';
import './ToDoItem.css';
import { connect } from 'react-redux';
import { deleteToDoItem } from '../actions/todoActions';


class ToDoItem extends Component {
    handleInput = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
    };

    handleClick = () => {
      this.props.deleteToDoItem(this.props.id)
    };

    render() {
      console.log(this.props);
        return (
            <div className="ToDoItem">

              <div className="ToDoItem-Text">
                <div>
                  <b>Title: </b>
                  {this.props.title}
                </div>
                <br/>
                <div>
                  <b>To do: </b>
                  {this.props.todo}
                </div>
              </div>

              <FormDialog 
/*                title={this.props.title}
                todo={this.props.todo}*/
                id={this.props.id}
              />

              <Button variant="contained" color="secondary" className="ToDo-Delete"
/*                      onClick={() => this.props.deleteToDoItem(this.props.id)}>*/
                     onClick={this.handleClick}>
                <i className="fa fa-trash fa-2x"></i>
              </Button>

            </div>
        );
    }
}

const MapDispatchToProps = (dispatch) => {
  return {
    deleteToDoItem: (id) => {dispatch( deleteToDoItem(id) )}
  }
}

export default connect(null, MapDispatchToProps)(ToDoItem);
