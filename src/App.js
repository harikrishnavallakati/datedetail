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
      startDate: '',
      timeEnd: '',
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
  validate = (startdate,enddate) => {
    if(startdate === '' ) {
      alert("Please fill in fields");
      return 'not null startdate';
    }
    if(startdate === 10 ) {
      return true;
    }
    const error = !(startdate && enddate)
    this.setState({error: error ? 'Please fill in fields': ''})
    return error
  }
  submitHandler(e) {
    // alert('A name was submitted: ' + this.state.startDate +this.state.timeEnd);
    // this.state = {startDate:1519026163000, timeEnd:1519126755000} // example
    const error = this.validate(this.state.startDate, this.state.timeEnd)
    if (error) {
      return 
    }
    const startDate = moment(this.state.startDate);
    const timeEnd = moment(this.state.timeEnd);
    const test = startDate.diff(timeEnd, 'days');
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
    alert("Days:" + test);
    // console.log("Hours:", diffDuration.hours());
    // console.log("Minutes:", diffDuration.minutes());
    // console.log("Seconds:", diffDuration.seconds());
    e.preventDefault()

    console.log(this.state)
  }

  handleDateChange = m => {
    this.setState({ startDate: m });
    //console.log(m.format("YYYY-MM-DD"));
  };

  handleDateChangetoDate = m => {
    this.setState({ timeEnd: m });
    //console.log(m.format("YYYY-MM-DD"));
  };

  render() {
    const { startDate, timeEnd } = this.state
    return (
        <form onSubmit={this.submitHandler}>
          <DatePicker 
            id="calendarFrom"
            className="TestIcon" 
            placeholder='User name'
            value={startDate} 
            selected={this.state.startDate}
            onChange={this.handleDateChange}/>
          <DatePicker 
            id="calendarTo"
            className="TestIcon"
            placeholder='timeEnd'
            value={timeEnd}
            selected={this.state.timeEnd}
            onChange={this.handleDateChangetoDate} />
          <input className='btn btn-primary' type='submit' value='Login' />
          <div className='error'>{this.state.error}</div>
        </form>
    );
  }
}

export default App;
