import React, { Component } from 'react';
import './App.css';
import {Helmet} from 'react-helmet';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgProp: [],
      title: '',
      url: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      imgProp: [{ "title": this.state.title, "url": this.state.url }, ...prevState.imgProp]
    }))
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
      this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='App'>
        <Helmet>
          <style>{'body {background-color : #212530 ;}'}</style>
        </Helmet>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.url} name="url" placeholder="Enter URL" onChange={this.handleChange} size = '50' /><br />
          <input value={this.state.title} name="title" placeholder="Title" onChange={this.handleChange} size ='39' />
          <button type="submit">New Post</button>
        </form>
        <div>
          <ul className='list'>
            {this.state.imgProp.map((item, index) => {
              return (
                <li key={index}>
                 <p>{item.title}</p>
                 <img src={item.url} alt={item.title} height="400" width="400"/><br />
                </li>)
            })}
          </ul>

        </div>
        
      </div>
    )
  }
}
export default App;
