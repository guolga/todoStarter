import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', date: '', todos: [] }
  }

  inputChanged = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  dateChanged = (event, date) => {
    this.setState({ date: date });
  }

  addTodo = (event) => {
    event.preventDefault();
    const strDate = this.state.date.getDate() + "." +
      (this.state.date.getMonth() + 1) + "." +
      this.state.date.getFullYear();
    const newTodo = { description: this.state.description, date: strDate };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div><br/>
        <div>
          <form>
            Description:<br />
            <TextField name="description" hintText="Description"
              onChange={this.inputChanged}
              value={this.state.description} /><br />
            Date:<br />
            <DatePicker name="date" hintText="Duedate"
              onChange={this.dateChanged} value={this.state.date} />
            <RaisedButton onClick={this.addTodo} primary={true}
              label="Add" onClick={this.addTodo} />
          </form>
        </div>
        <div>
          <Table selectable={false}>
            <TableHeader
              displaySelectAll={false}><TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.state.todos.map((item, index) =>
                <TableRow key={index}><TableRowColumn>{item.date}</TableRowColumn><TableRowColumn>{item.description}</TableRowColumn></TableRow>)}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
