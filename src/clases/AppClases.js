import { Component } from "react";
import { connect } from "react-redux";
import { incremented, decremented } from "../clases/actions/reducer";
import Select from "../components/Select";
import { createNotes, deleteNotes } from "./actions/reducerNotes";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={() => this.props.incremented()}>+</button>
        <button onClick={() => this.props.decremented()}>-</button>
        <Select />
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={(e) => {
              const value = e.target.value;
              this.setState({
                value,
              });
            }}
            value={this.state.value}
          />
          <button
            onClick={() => {
              this.props.createNotes(this.state.value);
              this.state.value = "";
            }}
          >
            Add Note
          </button>
          {/* {this.state.value} */}
        </form>
        <div>
          {this.props.note?.map((note) => (
            <div key={note.id}>
              {note.note}
              <button onClick={() => this.props.deleteNotes(note.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.count,
    note: state.notes,
  };
};
export default connect(mapStateToProps, {
  incremented,
  decremented,
  createNotes,
  deleteNotes,
})(Counter);
