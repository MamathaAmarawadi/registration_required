import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    blur1: false,
    blur2: false,
    onCard: true,
  }

  onSubmitted = event => {
    event.preventDefault()
    const {onCard, blur1, blur2} = this.state

    const {firstname, lastname} = this.state

    if (firstname === '' && lastname === '') {
      this.firstblur()
      this.lastblur()
    } else if (firstname === '') {
      this.setState({blur1: true})
    } else if (lastname === '') {
      this.setState({blur2: true})
    } else {
      this.setState({onCard: !onCard})
    }
  }

  onFirst = event => {
    this.setState({firstname: event.target.value})
  }

  onLast = event => {
    this.setState({lastname: event.target.value})
  }

  firstblur = event => {
    const {firstname} = this.state
    console.log(firstname)
    if (firstname !== '') {
      this.setState({blur1: false})
    } else {
      this.setState({blur1: true})
    }
  }

  lastblur = event => {
    const {lastname} = this.state

    if (lastname !== '') {
      this.setState({blur2: false})
    } else {
      this.setState({blur2: true})
    }
  }

  onbtn = () => {
    this.setState({onCard: true})
  }

  render() {
    const {blur1, blur2, onCard, firstname, lastname} = this.state
    return (
      <div className="container">
        <div className="center">
          <h1 className="heading">Registration</h1>
          {onCard ? (
            <div className="card">
              <form onSubmit={this.onSubmitted}>
                <div className="row">
                  <label htmlFor="name">FIRST NAME</label>
                  <br />
                  <input
                    type="text"
                    placeholder="First name"
                    className="input"
                    name="name"
                    id="name"
                    onChange={this.onFirst}
                    onBlur={this.firstblur}
                    value={firstname}
                  />
                  {blur1 ? <p>Required</p> : ''}
                </div>
                <div className="row">
                  <label htmlFor="lastName">LAST NAME</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="input"
                    name="lastname"
                    id="lastName"
                    onChange={this.onLast}
                    onBlur={this.lastblur}
                    value={lastname}
                  />
                  {blur2 ? <p>Required</p> : ''}
                </div>
                <div className="button-container">
                  <button className="btn">Submit</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="card">
              <div className="pic">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                  alt="success"
                  className="img"
                />
              </div>
              <p>Submitted Successfully</p>
              <div>
                <button className="btn" onClick={this.onbtn}>
                  Submit Another Response
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
