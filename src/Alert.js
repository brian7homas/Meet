import React, { Component } from 'react';

class Alert extends Component {
  constructor(props){
    super(props)
    this.color = null;
  }
  getStyle = () => {
    return {
      color: this.color
    }
  }
  render() {
    return (
      <div className='Alert'>
        <p
          className={`Alert__${this.props.modifier}`}
          style={this.getStyle()}
        >
          {this.props.text}
        </p>
      </div>
    );
  }
}

export class InfoAlert extends Alert {
  constructor(props){
    super(props)
    this.color='orange'
  }
}
export class ErrorAlert extends Alert {
  constructor(props){
    super(props)
    this.color='red'
  }
}



export default Alert;