/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-restricted-globals */

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getAlphabets,
  updateAllAlphabetToZero,
  updateAlphabetToOne,
  updateallAlphabetToOne,
  updateAlphabetToZero,
  createTask,
} from "../actions/alphabetsAction";
import { getAlphabets1 } from "../actions/alphabetsAction";

class DisplayAllAlphabets extends React.Component {
  componentDidMount() {
    this.props.getAlphabets();
    this.props.getAlphabets1();
  }

  constructor(props) {
    super(props);
    this.state = {
      alphabet: "",
      taskName: "",
    };
  }

  firstButton = (event) => {
    if (event.target.value === "a") {
      this.props.updateAlphabetToOne(this.state.alphabet);
      location.reload(false);
      
    } else if (event.target.value === "aa") {
      this.props.updateallAlphabetToOne();
      location.reload(false);
    
    } else if (event.target.value === "b") {
      this.props.updateAlphabetToZero(this.state.alphabet);
      location.reload(false);
    } else if (event.target.value === "bb") {
      this.props.updateAllAlphabetToZero();
      location.reload(false);
    }
    location.reload(false);
  };

  addTask = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.taskName);
    location.reload(false);
  };

  getAlphaValue = (event) => {
    this.state.alphabet = event.target.value;
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { alphabets } = this.props.alphabets;
    const { alphabets1 } = this.props.alphabets;
    console.log("data11111111:", alphabets1);
    return (
      <div className="alphabets">
        <div className="container">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="taskName"
                value={this.state.taskName}
                onChange={this.onChange}
                id="exampleFormControlInput1"
                placeholder="enter task"
              ></input>
            </div>
            <div class="col">
              <button className="btn btn-primary" onClick={this.addTask}>
              <i className="fa fa-plus" ></i>add Task
              </button>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col col-lg-3">
              {alphabets.map((alphabet) => {
                return (
                  <div>
                    <button
                      className="btn btn-primary"
                      value={alphabet.alphabet}
                      onClick={this.getAlphaValue}
                    >
                      {alphabet.alphabet}
                    </button>
                    <hr />
                  </div>
                );
              })}
            </div>
            <div className="col col-lg-2"></div>
            <div className="col col-lg-3">
              <br />
              <br />
              <div className="col-sm">
                <button
                  className="btn btn-secondary"
                  value="a"
                  onClick={this.firstButton}
                >
                  moveToRight
                </button>
                <br />
                <br />
                <br />
                <button
                  className="btn btn-secondary"
                  value="aa"
                  onClick={this.firstButton}
                >
                  moveAllToRight
                </button>
                <br />
                <br />
                <br />
                <button
                  className="btn btn-secondary"
                  value="b"
                  onClick={this.firstButton}
                >
                  moveToLeft
                </button>
                <br />
                <br />
                <br />
                <button
                  className="btn btn-secondary"
                  value="bb"
                  onClick={this.firstButton}
                >
                  moveAllToLeft
                </button>
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="col col-lg-3">
              {alphabets1.map((alphabet) => {
                return (
                  <div>
                    <button
                      className="btn btn-primary"
                      value={alphabet.alphabet}
                      onClick={this.getAlphaValue}
                    >
                      {alphabet.alphabet}
                    </button>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
DisplayAllAlphabets.propTypes = {
  getAlphabets: PropTypes.func.isRequired,
  getAlphabets1: PropTypes.func.isRequired,
  updateallAlphabetToOne: PropTypes.func.isRequired,
  updateAlphabetToOne: PropTypes.func.isRequired,
  updateAlphabetToZero: PropTypes.func.isRequired,
  updateAllAlphabetToZero: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alphabets: state.alphabets,
  alphabets1: state.alphabets1,
});

export default connect(mapStateToProps, {
  getAlphabets,
  getAlphabets1,
  updateallAlphabetToOne,
  updateAlphabetToOne,
  updateAlphabetToZero,
  updateAllAlphabetToZero,
  createTask,
})(DisplayAllAlphabets);
