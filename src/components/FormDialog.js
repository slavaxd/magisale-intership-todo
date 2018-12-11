import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { updateToDoItem } from '../actions/todoActions';

class FormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      title: '',
      id: this.props.id,
      open: false
    };
  }

  handleSave = () => {
    this.props.updateToDoItem(this.state.todo, this.state.title, this.state.id); 
    this.setState({ open: false });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInputDialog = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} color="primary"><i className="fa fa-edit fa-2x"></i></Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="title"
              value={this.state.title}
              type="email"
              fullWidth
              onChange={this.handleInputDialog}
            />
            <TextField
              margin="dense"
              id="todo"
              label="todo"
              value={this.state.todo}
              type="email"
              fullWidth
              onChange={this.handleInputDialog}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={ this.handleClose } color="primary">
              Close
            </Button>
            <Button onClick={ this.handleSave } color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    list: state.list,
    todo: state.todo,
    title: state.title,
  }
};

const MapDispatchToProps = (dispatch) => {
  return {
    updateToDoItem: (todo, title, id) => { 
        dispatch(updateToDoItem(todo, title, id))
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(FormDialog);
