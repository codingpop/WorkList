import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Nav from './../presentational/Nav.jsx';
import Brand from './../presentational/Brand.jsx';
import setUser from './../../actions/setUser';

/**
 * SignIn
 */
class SignIn extends Component {
  /**
  * Instantiates the sign up component
  */
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Handles onChange event on input fields
   * @param {Object} event - the input field onChange event
   * @memberof SignUp
   * @returns {void}
   */
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
 * Handles onSubit event on form submission
 * @param {Object} event - the form onSubmit event
 * @memberof SignUp
 * @returns {void}
 */
  handleSubmit(event) {
    event.preventDefault();
    this.props.setUser(this.state, 'signin');
    this.setState({});
  }

  /**
   * Renders the SignUp component
   *
   * @returns {Object} - SignUp Component
   */
  render() {
    return (
      <section className="auth">
        <Nav>
          <div className="container-fluid">
            <div className="nav-wrapper">
              <Brand />
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/sign-in" href="/sign-in">Sign in</Link>
                </li>
              </ul>
            </div>
          </div>
        </Nav>

        <div className="row">
          <div className="form">
            <form action="" className="col s12" onSubmit={this.handleSubmit}>
              <h4>Sign in</h4>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">lock</i>
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <br />
              <button
                className="btn btn-large waves-effect waves-light"
                type="submit"
              >Continue<i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

SignIn.propTypes = {
  setUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setUser }, dispatch)
);

export default connect(null, mapDispatchToProps)(SignIn);

