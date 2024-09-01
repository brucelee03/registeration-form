import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    submissionMsg: false,
    firstNameErr: false,
    lastNameErr: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameErr: true})
    } else {
      this.setState({firstNameErr: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameErr: true})
    } else {
      this.setState({lastNameErr: false})
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      submissionMsg: false,
      firstNameErr: false,
      lastNameErr: false,
    })
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' || lastName === '') {
      if (firstName === '') {
        this.setState({firstNameErr: true})
      }
      if (lastName === '') {
        this.setState({lastNameErr: true})
      }
    } else {
      this.setState({
        submissionMsg: true,
        firstNameErr: false,
        lastNameErr: false,
      })
    }
  }

  renderFirstNameField = () => {
    const {firstName, firstNameErr} = this.state
    const inputFieldErrClassName = firstNameErr ? 'input-field-err' : ''

    return (
      <>
        <label className="input-label" htmlFor="first-name">
          FIRST NAME
        </label>
        <input
          type="text"
          id="first-name"
          className={`input-field ${inputFieldErrClassName}`}
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          placeholder="First name"
        />
        <p className="error-msg">{firstNameErr ? 'Required' : ''}</p>
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, lastNameErr} = this.state
    const inputFieldErrClassName = lastNameErr ? 'input-field-err' : ''

    return (
      <>
        <label className="input-label" htmlFor="last-name">
          LAST NAME
        </label>
        <input
          type="text"
          id="last-name"
          className={`input-field ${inputFieldErrClassName}`}
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          placeholder="Last name"
        />
        <p className="error-msg">{lastNameErr ? 'Required' : ''}</p>
      </>
    )
  }

  render() {
    const {submissionMsg} = this.state
    return (
      <div className="registeration-container">
        <h1 className="heading">Registration</h1>
        {submissionMsg ? (
          <div className="submisson-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="successful-img"
            />
            <p className="successful-msg">Submitted Successfully</p>
            <div className="button-card">
              <button
                type="button"
                onClick={this.onClickSubmitAnotherResponse}
                className="submit-another-response"
              >
                Submit Another Response
              </button>
            </div>
          </div>
        ) : (
          <form className="registeration-form" onSubmit={this.submitForm}>
            <div className="input-container">{this.renderFirstNameField()}</div>
            <div className="input-container">{this.renderLastNameField()}</div>
            <div className="button-card">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
