import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment/moment.js'
import "react-datepicker/dist/react-datepicker.css";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: ''
    }
    this.setField = this.setField.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }
  setField(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }
  validate() {
    const error = !(this.state.username && this.state.password)
    this.setState({error: error ? 'Please fill in fields': ''})
    return error
  }
  submitHandler(e) {
    // alert('A name was submitted: ' + this.state.username +this.state.password);
    // this.state = {startDate:1519026163000, timeEnd:1519126755000} // example

    const startDate = moment(this.state.username);
    const timeEnd = moment(this.state.password);
    
    const diff = timeEnd.diff(startDate);
    const diffDuration = moment.duration(diff);

   const startDate1 = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'numeric',day: 'numeric'}).format(new Date(Number(startDate)));
   const timeEnd1 = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'numeric',day: 'numeric'}).format(new Date(Number(timeEnd)));
    // alert('A name was submitted: ' + test);
    // console.log(test);
    console.log("Total Duration in millis:", diffDuration.asMilliseconds());
    console.log("from day:", startDate1);
    console.log("to day:", timeEnd1);
    console.log("Days:", diffDuration.days());
    // console.log("Hours:", diffDuration.hours());
    // console.log("Minutes:", diffDuration.minutes());
    // console.log("Seconds:", diffDuration.seconds());
    e.preventDefault()
    const error = this.validate()
    if (error) {
      return 
    }
    console.log(this.state)
  }

  handleDateChange = m => {
    this.setState({ username: m });
    //console.log(m.format("YYYY-MM-DD"));
  };

  handleDateChangetoDate = m => {
    this.setState({ password: m });
    //console.log(m.format("YYYY-MM-DD"));
  };

  render() {
    const { username, password } = this.state
    return (
        <form onSubmit={this.submitHandler}>
          <DatePicker 
            id="calendarFrom"
            className="TestIcon" 
            placeholder='User name'
            value={username} 
            selected={this.state.username}
            onChange={this.handleDateChange}/>
          <DatePicker 
            id="calendarTo"
            className="TestIcon"
            placeholder='Password'
            value={password}
            selected={this.state.password}
            onChange={this.handleDateChangetoDate} />
          <input className='btn btn-primary' type='submit' value='Login' />
          <div className='error'>{this.state.error}</div>
        </form>
    );
  }
}

export default App;
